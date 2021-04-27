const yupValidate = async (schema, data, options = {}) => {
  try {
    const validateOptions = {
      abortEarly: false,
      stripUnknown: true,
      ...options,
    };

    const result = await schema.validate(data, validateOptions);

    return {
      success: true,
      data: result,
      errors: {},
    };
  } catch (errors) {
    const validationErrors = {};

    errors.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });

    return {
      success: false,
      data: {},
      errors: validationErrors,
      rawErrors: errors,
    };
  }
};

export default yupValidate;
