exports.getIconSize = () => {
  if (window.innerWidth < 720) return 28;
  else return 24;
};
exports.formatBytes = (bytes, decimals) => {
  if (bytes === 0 || bytes === "0" || isNaN(bytes)) return "0 B";
  var k = 1024;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
};

exports.getFilename = (file) => {
  if (file.path === "") return file.uris[0].uri.replace(/^.*(\\|\/|:)/, "");
  else if (file.path.length > 0) return file.path.replace(/^.*(\\|\/|:)/, "");
  else return "Error";
};

exports.getProgress = (completed, total, digits) => {
  const progress = ((completed / total) * 100).toFixed(digits);
  if (isNaN(progress)) return "0%";
  else return progress + "%";
};

exports.isURL = (str) => {
  return /^(?:\w+:)?\/\/([^\s.]+\.\S{2})\S*$/.test(str);
};

exports.isPath = (str) => {
  return /^(\/([^/]+\/)*)(.*)$/.test(str);
};

exports.isSpeed = (str) => {
  if (str === "0") return true;
  else return /^[0-9]+[kKmM]?$/.test(str);
};