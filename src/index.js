// Remove click delay
import fastclick from 'fastclick';

if(document && document.body) {
    fastclick.attach(document.body);
}

import TodoList from 'core/init';
new TodoList();
