function chunk<T>(array: T[], size = 1): T[][] {
    if (size < 1 || !array.length) {
        return [];
    }

    const chunks = new Array<T>(Math.ceil(array.length / size));
    
    let index = 0;

    while(index < chunks.length) {
        chunks[index++] = array.splice(0, size);
    }

    return chunks;
}
