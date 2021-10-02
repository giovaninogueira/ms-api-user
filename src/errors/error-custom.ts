class ErroCustom {
    public message: string;

    /**
     * Construct Error Custom
     * @param error
     */
    constructor(error: { error: string; code: number }) {
        this.message = JSON.stringify(error);
    }
}

export { ErroCustom }