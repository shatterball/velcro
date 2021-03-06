export const getIconSize = () => {
  if (window.innerWidth < 720) return 28;
  else return 24;
};
export const formatBytes = (bytes, decimals) => {
  if (bytes === 0 || bytes === "0" || isNaN(bytes)) return "0 B";
  var k = 1024;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
};

export const getFilename = (data) => {
  const file = data.files[0];
  if (data.bittorrent) {
    if (data.bittorrent.info) {
      return data.bittorrent.info.name;
    } else {
      return file.path;
    }
  } else {
    if (file.path === "") {
      return file.uris[0].uri.replace(/^.*(\\|\/|:)/, "");
    } else if (file.path.length > 0) {
      return file.path.replace(/^.*(\\|\/|:)/, "");
    } else {
      return "Error";
    }
  }
};

export const getProgress = (completed, total, digits) => {
  const progress = ((completed / total) * 100).toFixed(digits);
  if (isNaN(progress)) return "0%";
  else return progress + "%";
};

export const isURL = (str) => {
  return (
    /^(?:\w+:)?\/\/([^\s.]+\.\S{2})\S*$/.test(str) ||
    /^magnet:\?xt=urn:/.test(str)
  );
};

export const isPath = (str) => {
  return /^(\/([^/]+\/)*)(.*)$/.test(str);
};

export const isSpeed = (str) => {
  if (str === "0") {
    return true;
  } else return /^[0-9]+[kKmM]?$/.test(str);
};

export const isNum = (num) => {
  const split = parseInt(num);
  return !isNaN(split) && split > 0 && split < 16;
};

export const defaultRpcConfig = {
  host: window.location.hostname,
  port: 6800,
  path: "/jsonrpc",
};

export const dataCalls = [
  ["tellActive"],
  ["tellWaiting", 0, 999],
  ["tellStopped", 0, 999],
  ["getGlobalStat"],
];
