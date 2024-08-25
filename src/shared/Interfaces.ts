/**
 * @param {string} userName
 * @param {string} role
 * @param {string} image
 */

export interface IData {
    userName: string;
    parentID: number | null;
    role: string[];
    image: string;
    childID: number | null;
}
