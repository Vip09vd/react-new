export class TodoService {
    todos = [
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        },
        {
            heading: 'Hello Andrew!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quasi.'
        }
    ];

    getData(first, count = 5) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (first < 0 || first >= this.todos.length) {
                    reject('Hello Andrew!');
                } else {
                    resolve(this.todos.slice(first, first + count));
                }
            }, 100);
        });
    }

    getTotalCount() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.todos.length);
            }, 10);
        });
    }

    addData(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.todos.unshift(data);
                resolve(data);
            }, 10);
        });
    }

    deleteData(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.todos.splice(this.todos.indexOf(data), 1);
                resolve(data);
            }, 10);
        });
    }

    editData(oldData, newData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.todos.splice(this.todos.indexOf(oldData), 1, newData);
                resolve(newData);
            }, 10);
        });
    }


}

export default new TodoService();