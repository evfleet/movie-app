export interface Theme {
  colours: {
    [key: string]: string;
  };
}

const theme: Theme = {
  colours: {
    darkBlue: "#0A2342",
    mediumBlue: "#2C63A5",
    greyBlue: "#849DBC",
    offWhite: "#F7FAFF",
    accentBlue: "#61A4F4"
  }
};

export default theme;
