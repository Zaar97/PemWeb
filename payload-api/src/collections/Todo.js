import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */
const Todo = {
    slug : "Todo",
    access : {
        read : () => true,
        create : () => true,
        update : () => true,
        delete : () => true,
      },
      admin: {
        useAsTitle: "Tugas"
    },
    fields : [
        {
            name: "Tugas", 
            type: "text", 
            required: true,
            label: "Nama Tugas" 
        },
        {
            name: "Deadline",
            type: "date",
            required: true,
            admin: {
                date: {
                  pickerAppearance: 'dayOnly',
                  displayFormat: 'd MMM yyy',
                },
              },
        },
        {
            name: "Category", 
            type: "select",
            label: "Category",
            options: [
                { label: "Tugas", value: "Tugas" },
                { label: "Praktikum", value: "Praktikum" },
                { label: "Kepanitiaan", value: "Kepanitiaan" },
                { label: "Chores", value: "Chores" },
            ],  
        },                
        {
            name: 'Status', 
            type: 'radio', 
            required: true,
            options: [
                {
                    label: 'In Progress',
                    value: 'inProgress',
                },
                {
                    label: 'Completed',
                    value: 'completed',
                },
            ],
            defaultValue: 'inProgress', 
            admin: {
                layout: 'horizontal',
            },
        },
    ],
  }
  export default Todo
  
  