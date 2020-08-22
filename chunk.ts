function chunk(array: any[], size = 1): any[][] {
    if (size < 1 || !array.length) {
        return [];
    }

    const chunks = new Array(Math.ceil(array.length / size));
    
    let index = 0;

    while(index < chunks.length) {
        chunks[index++] = array.splice(0, size);
    }

    return chunks;
}
