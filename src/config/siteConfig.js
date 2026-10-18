const FOOTER_ACCESS_CODE = "iamironman";

export const canOpenPersonalNotes = (code) =>
  code.trim() === FOOTER_ACCESS_CODE;