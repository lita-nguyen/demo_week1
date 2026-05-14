const trungBinh = (diemToan, diemVan, diemAnh) => {
  return (diemToan + diemVan + diemAnh) / 3;
};

const xepLoai = (dtb) => {
  if (dtb >= 9 && dtb <= 10) {
    return "Xuat sac";
  } else if (dtb >= 8 && dtb < 9) {
    return "Gioi";
  } else if (dtb >= 6.5 && dtb < 8) {
    return "Kha";
  } else if (dtb >= 0 && dtb < 6.5) {
    return "Trung binh";
  } else {
    return "Khong hop le";
  }
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const dtb = trungBinh(diemToan, diemVan, diemAnh);

console.log(`
Diem trung binh: ${dtb}
Xep loai: ${xepLoai(dtb)}`);
