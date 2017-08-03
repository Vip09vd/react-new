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

    getData(first, count = 5){
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
}

export default new TodoService();