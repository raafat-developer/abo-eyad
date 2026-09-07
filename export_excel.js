const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

async function exportMenuToExcel() {
    const jsonPath = path.join(__dirname, 'menu data .json');
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(rawData);

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Abu Eyad El Souri';
    workbook.created = new Date();

    // ================= WORKSHEET 1: FULL MENU =================
    const wsMenu = workbook.addWorksheet('قائمة الطعام الشاملة', {
        views: [{ RTL: true }]
    });

    // Define Columns
    wsMenu.columns = [
        { header: 'القسم الرئيسي', key: 'category', width: 22 },
        { header: 'اسم الصنف / الوجبة', key: 'name', width: 35 },
        { header: 'السعر (ج.م)', key: 'price', width: 15 },
        { header: 'سعر (وسط)', key: 'small_shami', width: 20 },
        { header: 'سعر (كبير)', key: 'large_syrian', width: 20 },
        { header: 'الوصف / ملاحظات الطبق', key: 'notes', width: 45 }
    ];

    // Header Styling
    const headerRow = wsMenu.getRow(1);
    headerRow.font = { name: 'Arial', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFC8102E' } // Fiery Red
    };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.height = 28;

    const menuObj = data.menu || {};

    const processItem = (catName, item, defaultNote = '') => {
        let p = item.price !== undefined ? item.price : null;
        let smallShami = null;
        let largeSyrian = null;

        if (item.small !== undefined) smallShami = item.small;
        if (item.shami !== undefined) smallShami = item.shami;

        if (item.large !== undefined) largeSyrian = item.large;
        if (item.syrian !== undefined) largeSyrian = item.syrian;

        let note = item.description || item.note || defaultNote || '';

        const row = wsMenu.addRow({
            category: catName,
            name: item.name,
            price: p,
            small_shami: smallShami,
            large_syrian: largeSyrian,
            notes: note
        });

        row.alignment = { vertical: 'middle', horizontal: 'right' };
        row.font = { name: 'Arial', size: 11 };

        // Border
        row.eachCell((cell) => {
            cell.border = {
                top: { style: 'thin', color: { argb: 'FFE5E7EB' } },
                bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } },
                left: { style: 'thin', color: { argb: 'FFE5E7EB' } },
                right: { style: 'thin', color: { argb: 'FFE5E7EB' } }
            };
        });
    };

    for (const [key, category] of Object.entries(menuObj)) {
        const catName = category.name || key;
        const catNote = category.note || category.description || '';

        if (Array.isArray(category.items)) {
            category.items.forEach(item => processItem(catName, item, catNote));
        } else if (typeof category === 'object') {
            for (const [subKey, subCat] of Object.entries(category)) {
                if (typeof subCat === 'object') {
                    const subName = subCat.name || subKey;
                    const subNote = subCat.note || subCat.description || catNote;

                    if (Array.isArray(subCat.items)) {
                        subCat.items.forEach(item => processItem(subName, item, subNote));
                    } else if (subCat.name && subCat.price) {
                        processItem(subName, subCat, subNote);
                    }
                }
            }
        }
    }

    // Zebra Striping & Number Formatting
    wsMenu.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
            if (rowNumber % 2 === 0) {
                row.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFF9FAFB' }
                };
            }

            // Format price cells
            [3, 4, 5].forEach(colIndex => {
                const cell = row.getCell(colIndex);
                if (typeof cell.value === 'number') {
                    cell.numFmt = '#,##0" ج.م"';
                    cell.alignment = { horizontal: 'center' };
                    cell.font = { bold: true };
                }
            });
        }
    });


    // ================= WORKSHEET 2: SPECIAL OFFERS =================
    const wsOffers = workbook.addWorksheet('العروض والبوكسات العائلية', {
        views: [{ RTL: true }]
    });

    wsOffers.columns = [
        { header: 'اسم العرض / البوكس', key: 'name', width: 30 },
        { header: 'مكونات العرض / التفاصيل', key: 'desc', width: 50 },
        { header: 'السعر الإجمالي (ج.م)', key: 'price', width: 22 }
    ];

    const offerHeader = wsOffers.getRow(1);
    offerHeader.font = { name: 'Arial', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
    offerHeader.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFF6B00' } // Warm Orange
    };
    offerHeader.alignment = { vertical: 'middle', horizontal: 'center' };
    offerHeader.height = 28;

    const specialOffers = [
        { name: 'عرض التوفير', desc: '3 سندوتش كبير شاورما / دجاج', price: 159 },
        { name: 'عرض اللمة', desc: '6 سندوتش كبير + 2 لتر بيبسي', price: 359 },
        { name: 'عرض العائلة', desc: '12 سندوتش كبير + صوص + بطاطس بوم فريت + 2L بيبسي', price: 759 },
        { name: 'بوكس حبش', desc: 'شاورما عربي + قطعة اسكالوب + زنجر + شيش + صوص', price: 220 },
        { name: 'طبق مزمزة', desc: 'بطاطس + ريزو + مسحب + صوص ناعم', price: 150 },
        { name: 'وجبة الأطفال', desc: 'دبوس فراخ + بطاطس بوم فريت + كاتشب', price: 70 }
    ];

    specialOffers.forEach(o => {
        const r = wsOffers.addRow(o);
        r.alignment = { vertical: 'middle', horizontal: 'right' };
        r.font = { name: 'Arial', size: 11 };
        const priceCell = r.getCell(3);
        priceCell.numFmt = '#,##0" ج.م"';
        priceCell.font = { bold: true, color: { argb: 'FFC8102E' } };
        priceCell.alignment = { horizontal: 'center' };
    });

    // ================= WORKSHEET 3: RESTAURANT INFO =================
    const wsInfo = workbook.addWorksheet('بيانات التواصل والمحل', {
        views: [{ RTL: true }]
    });

    wsInfo.columns = [
        { header: 'البيان', key: 'key', width: 25 },
        { header: 'التفاصيل', key: 'val', width: 55 }
    ];

    const infoHeader = wsInfo.getRow(1);
    infoHeader.font = { name: 'Arial', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
    infoHeader.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF1C1C1E' }
    };
    infoHeader.height = 28;

    const infoRows = [
        { key: 'اسم المطعم', val: data.restaurant || 'أبو إياد السوري (Abu Eyad El Souri)' },
        { key: 'الشعار والتعريف', val: data.slogan || 'هيغير مفهوم الشاورما - نكهة سورية تكتب الحكاية' },
        { key: 'ساعات العمل', val: data.hours || 'مفتوح دائماً (Always open)' },
        { key: 'أرقام الهاتف والدليفري', val: (data.contact && data.contact.phone) || '01042822787 - 01042827982' },
        { key: 'رقم الواتساب للطلبات', val: (data.contact && data.contact.whatsapp) || '01212904055' },
        { key: 'صفحة الماسينجر', val: (data.contact && data.contact.messenger) || 'ابو اياد السوري' },
        { key: 'العنوان التفصيلي', val: (data.location && data.location.address) || 'مشتول السوق شارع السوق بجوار جمال شرف' }
    ];

    infoRows.forEach(info => {
        const r = wsInfo.addRow(info);
        r.alignment = { vertical: 'middle', horizontal: 'right' };
        r.font = { name: 'Arial', size: 11 };
        r.getCell(1).font = { bold: true };
    });

    // Save Workbook to File
    const outputPath = path.join(__dirname, 'Abu_Eyad_Menu_Data.xlsx');
    await workbook.xlsx.writeFile(outputPath);
    console.log(`Excel file created successfully at: ${outputPath}`);

    // Also export a CSV version for maximum compatibility
    const wsCsv = workbook.getWorksheet('قائمة الطعام الشاملة');
    const csvPath = path.join(__dirname, 'Abu_Eyad_Menu_Data.csv');
    await workbook.csv.writeFile(csvPath);
    console.log(`CSV file created successfully at: ${csvPath}`);
}

exportMenuToExcel().catch(console.error);
