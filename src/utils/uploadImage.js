/**
 * @param   {Blob} file
 * @returns {Promise.<String>}
 */
const readImage = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = event => {
      resolve(event.currentTarget.result);
    };

    reader.onerror = event => {
      const errorMessages = new Map();

      errorMessages.set(1, "File not found");
      errorMessages.set(
        2,
        "For security reasons, this file cannot be processed"
      );
      errorMessages.set(3, "File upload got aborted");
      errorMessages.set(4, "File is not readable");
      errorMessages.set(5, "The file is too large to be uploaded");

      reject(new Error(errorMessages.get(event.currentTarget.error.code)));
    };
    reader.readAsDataURL(file);
  });

/**
 * @param   {string} file
 * @returns {Promise.<Object>}
 */
const getImageDimensions = file =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      const { naturalWidth, naturalHeight } = image;

      resolve({ naturalHeight, naturalWidth });
    };

    image.onerror = event => reject(new Error(event.toString()));
    image.src = file.toString();
  });

/**
 * @param   {ImageDimensions} dimensions
 * @param   {ImageRequirements} requirements
 * @returns {Promise.<boolean>}
 */
const validateImage = (dimensions, requirements) =>
  new Promise((resolve, reject) => {
    const errorMessage = [];
    const { naturalWidth, naturalHeight } = dimensions;
    const { minWidth, minHeight, height, width } = requirements;

    if (
      minHeight &&
      !height &&
      !isMinimalHeightCorrect(minHeight, naturalHeight)
    ) {
      errorMessage.push(`at least ${minHeight}px high`);
    }

    if (minWidth && !width && !isMinimalWidthCorrect(minWidth, naturalWidth)) {
      errorMessage.push(`at least ${minWidth}px wide`);
    }

    if (height && !isExactHeightCorrect(height, naturalHeight)) {
      errorMessage.push(`exactly ${height}px high`);
    }

    if (width && !isExactWidthCorrect(width, naturalWidth)) {
      errorMessage.push(`exactly ${width}px wide`);
    }

    if (errorMessage.length) {
      reject(
        new Error(
          `The uploaded image needs to be ${errorMessage.join(" and ")}`
        )
      );
    }
    resolve(true);
  });

/**
 * @param   {number} requiredMinimalHeight
 * @param   {number} actualHeight
 * @returns {boolean}
 */
const isMinimalHeightCorrect = (requiredMinimalHeight, actualHeight) =>
  actualHeight >= requiredMinimalHeight;

/**
 * @param   {number} requiredMinimalWidth
 * @param   {number} actualWidth
 * @returns {boolean}
 */
const isMinimalWidthCorrect = (requiredMinimalWidth, actualWidth) =>
  actualWidth >= requiredMinimalWidth;

/**
 * @param   {number} requiredExactHeight
 * @param   {number} actualHeight
 * @returns {boolean}
 */
const isExactHeightCorrect = (requiredExactHeight, actualHeight) =>
  actualHeight === requiredExactHeight;

/**
 * @param   {number} requiredExarequiredExactWidthtHeight
 * @param   {number} actualWidth
 * @returns {boolean}
 */
const isExactWidthCorrect = (requiredExactWidth, actualWidth) =>
  actualWidth === requiredExactWidth;

/**
 * @param {Function} acceptedFileAction
 * @param {Function} rejectedFileAction
 * @param {Blob[]} acceptedFiles
 * @param {ImageRequirements} requirements
 */
const onDropImageUpload = (
  acceptedFileAction,
  rejectedFileAction,
  acceptedFiles,
  requirements = {}
) => {
  // acceptedFiles.forEach(async file => {
  //   try {
  //     const imageDataUrl = await readImage(file);
  //     const dimensions = await getImageDimensions(imageDataUrl);
  //     await validateImage({ ...dimensions }, requirements);
  //     await acceptedFileAction({
  //       imageData: imageDataUrl
  //     });
  //   } catch (e) {
  //     rejectedFileAction({ message: e.message });
  //   }
  // });
  console.log(acceptedFiles.length);
};

export { onDropImageUpload, validateImage };
