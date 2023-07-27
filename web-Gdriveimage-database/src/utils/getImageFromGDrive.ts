function getImageIDFromGDrive(input: string) {
  let link = `${input}`;
  let split = link.split("/");
  for (let i = 0; i <= split.length; i++) {
    if (split[i].length >= 20) {
      return split[i];
    }
  }
}

export function getImageFromGDrive(input: string) {
  const ImageId: string | undefined = getImageIDFromGDrive(input);
  let link = `https://drive.google.com/uc?export=view&id=${ImageId}`;
  return link;
}
