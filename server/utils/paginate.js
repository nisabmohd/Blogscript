function paginate(array, page_size, page_number) {
    return array.slice((page_number) * page_size, (page_number+1) * page_size);
}
module.exports={paginate}