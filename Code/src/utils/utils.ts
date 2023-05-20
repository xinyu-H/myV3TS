const Utils = {
    setSessionItem(key: string, value: any) {
        sessionStorage.setItem(key, value);
    },
    getSessionItem(key: string) {
        return sessionStorage.getItem(key);
    },
    removeSessionItem(key: string) {
        sessionStorage.removeItem(key);
    },
    cleraSessionItem() {
        sessionStorage.clear()
    },
    setLocalItem(key: string, value: any) {
        localStorage.setItem(key, value);
    },
    getLocalItem(key: string) {
        return localStorage.getItem(key);
    },
    removeLocalItem(key: string) {
        localStorage.removeItem(key);
    },
    cleraLocalItem() {
        localStorage.clear()
    }
}
export default Utils

