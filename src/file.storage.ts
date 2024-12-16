export const FILE_STORAGE_TOKEN = Symbol('FileStorage');

export interface FileStorage {
  save(file: File): Promise<unknown>;
  get(name: string): Promise<unknown>;
}
