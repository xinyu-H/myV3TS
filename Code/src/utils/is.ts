const Is = {
  /**
   * 判断是否移动端
   */
  isMobile() {
    return /Mobile|Android|iPhone/i.test(navigator.userAgent);
  },
  getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "iOS"; // 苹果设备
    } else if (userAgent.match(/Android/i)) {
      return "Android"; // 安卓设备
    } else {
      return "unknown"; // 其他设备
    }
  },
};

export default Is;
