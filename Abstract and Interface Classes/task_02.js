class StorageProvider {
    constructor() {
        if (new.target === StorageProvider) {
            throw new Error("Cannot instantiate interface class")
        }
    }
    upload(file) {
        throw new Error("Method not implemented")
    }
    download(filename) {
        throw new Error("Method not implemented")
    }
}
class LocalStorageProvider extends StorageProvider {
    upload(file) {
        return `${file} uploading`
    }
    download(filename) {
        return `${filename} downloading`
    }
}
class CloudStorageProvider extends StorageProvider {
    upload(file) {
        return `${file} uploading`
    }
    download(filename) {
        return `${filename} downloading`
    }
}
function useStorage(provider) {
    if (typeof provider.upload !== 'function' || typeof provider.download !== 'function') {
        throw new Error("Invalid storage provider")
    }
}

useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provider