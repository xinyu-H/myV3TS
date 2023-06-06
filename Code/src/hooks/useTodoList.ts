import { ref, reactive, onMounted } from "vue";
import { IntTodoList } from "@/views/Test/DataModel/todoList";

export default () => {
    type DataType = {
        list: IntTodoList[];
        toAddData: IntTodoList;
    };

    const data = ref<DataType>({
        list: [],
        toAddData: {
            id: 0,
            title: "",
            isFinished: false,
        },
    });
    const addToDo = () => {
        data.value.list.push({ ...data.value.toAddData, id: data.value.list.length + 1 });
    };

    onMounted(() => {
        console.log('useTodoList.ts')
    })
    return { data, addToDo }
};
