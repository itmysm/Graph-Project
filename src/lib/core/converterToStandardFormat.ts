export function convertToStandardStructure(file: File, application: string) {
  switch (application) {
    case "whatsapp":
      whatsapp();
      break;

    default:
      break;
  }
}

function whatsapp() {
  console.log("run func wa");
}
