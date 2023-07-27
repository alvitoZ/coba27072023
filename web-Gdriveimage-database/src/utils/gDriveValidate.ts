export function is_valid_google_drive_link(link: string) {
  let pattern = new RegExp(
    `^https://drive.google.com/(?:open?id=|file/d/)([a-zA-Z0-9_-]{25,})|(?<=id=)([a-zA-Z0-9_-]{25,})|(?<=/d/)([a-zA-Z0-9_-]{25,})|(?<=/uc?export=download&id=)([a-zA-Z0-9_-]{25,})$";`
  );
  return pattern.test(link);
}
