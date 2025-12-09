import multer from "multer";
import path from "path";

// storage with timestamped filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext).replace(/\s+/g, "-");
    cb(null, `${Date.now()}-${name}${ext}`);
  },
});

// accept only images (jpg, png, jpeg, webp)
function fileFilter(req, file, cb) {
  const allowed = /jpeg|jpg|png|webp/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mimeOK = allowed.test(file.mimetype);
  const extOK = allowed.test(ext);
  if (mimeOK && extOK) cb(null, true);
  else cb(new Error("Only image files are allowed (jpeg, jpg, png, webp)."));
}

export const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB limit
  fileFilter,
});
