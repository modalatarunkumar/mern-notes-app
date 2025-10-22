class CustomError extends Error {
    constructor(message, code = 500){
        super(message)
        this.code = code
    }
}

export default CustomError;