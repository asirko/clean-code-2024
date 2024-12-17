export const FILE_STORAGE_TOKEN = Symbol('FileStorage');

export abstract class FileStorage {
  abstract save(file: File): Promise<unknown>;
  abstract get(name: string): Promise<unknown>;
}
