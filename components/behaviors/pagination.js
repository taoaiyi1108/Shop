const paginationBav = Behavior({
    data: {
        dataArray: [],
        total: 0
    },
    method: {
        setNewDate(dataArray) {
            const tempArray = this.data.dataArray.concat(dataArray);
            this.setData({
                dataArray: tempArray
            });
        },
        getCurrentStart() {
            return this.data.dataArray.length;
        },
        setTotal(total) {
            this.data.total = total;
        },
        hasMore() {
            if (this.data.dataArray.length >= this.data.total) {
                return false;
            } else {
                return true;
            }
        }
    }
})