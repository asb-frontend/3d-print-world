export function getInitials(name) {
  if (!name) return "";
  const nameParts = name.split(" ");
  const initials = nameParts.map((part) => part[0].toUpperCase()).join("");
  return initials;
}

export function getJoinedDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Create a human-readable date
  const humanReadableDate = date.toLocaleDateString("en-US", options);

  // Get the day of the month and determine the suffix
  const day = date.getDate();
  let suffix;
  if (day > 3 && day < 21) {
    suffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  }

  // Construct the final formatted date string
  const dayWithSuffix = day + suffix;
  const parts = humanReadableDate.split(" ");
  const formattedDate = `${parts[0]} ${dayWithSuffix}, ${parts[2]}`;

  return formattedDate;
}
export function getPhoneNum(phone) {
  // Extract the country code and the main number parts
  const countryCode = phone.slice(0, 2); // +1
  const areaCode = phone.slice(2, 5); // 817
  const centralOfficeCode = phone.slice(5, 8); // 915
  const lineNumber = phone.slice(8, 12); // 3534

  // Format the number
  return `${countryCode}(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}