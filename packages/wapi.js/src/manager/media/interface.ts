import { type z } from "zod";
import { type BaseManagerInterface } from "../base/interface";
import { type GetMediaUrlResponseBodySchemaType } from "./schema";

/**
 * Media manager interface
 * @interface
 * @extends {BaseManagerInterface}
 */
export interface MediaManagerInterface extends BaseManagerInterface {
  /**
   * Get the URL of a media file by its ID
   * @param {string} mediaId - The ID of the media file
   * @returns {Promise<z.infer<typeof GetMediaUrlResponseBodySchemaType>>} The URL of the media file
   */
  getUrl: (
    mediaId: string,
  ) => Promise<z.infer<typeof GetMediaUrlResponseBodySchemaType>>;

  /**
   * Upload a media file
   * @param {Object} params - The parameters for uploading the media file
   * @param {string} params.filePath - The file path of the media file
   * @param {string} params.mediaType - The type of the media file
   * @returns {Promise<string>} The ID of the uploaded media file
   */
  upload: (params: { filePath: string; mediaType: string }) => Promise<string>;

  /**
   * Delete a media file by its ID
   * @param {string} mediaId - The ID of the media file to delete
   * @returns {Promise<boolean>} A boolean indicating whether the deletion was successful
   */
  delete: (mediaId: string) => Promise<boolean>;
}
