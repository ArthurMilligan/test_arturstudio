import { FC, useState } from "react";
import s from './todosPage.module.scss'
import React from "react";
import { RadioItem, RadioFilter, TodosModal } from "../../components";
import { Button, TaskInput, Text } from "../../ui";
import {FilterList} from "../../constants";
import useModal from "../../hooks/useModal";
import Modal from "../../ui/Modal";


interface ITask{
  id: string;
  text: string;
  isActive: boolean;
}

const TodosPage:FC = () =>{
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskFilter, setTaskFilter] = useState('all');  
  const [currId, setCurrId] = useState(''); 
  const [isShowing, toggle] =useModal();
  const addTask = (text: string) =>{
    if(text.length===0){
      return;
    }
    setTaskList([...taskList,{id:`${Date.now()}`,isActive:true,text}])
  }
  const changeTaskStatus = (id:string) =>{
    const newTaskList=taskList.map((task: ITask)=>task.id===id?{...task,isActive:!task.isActive}:task)
    setTaskList(newTaskList);
  }
  const changeTask =(text:string)=>{
    const newTaskList=taskList.map((task: ITask)=>task.id===currId?{...task,text}:task)
    setTaskList(newTaskList);
  }
  const clearComplited = () =>{
    const newTaskList = taskList.filter((task: ITask)=>task.isActive)
    setTaskList(newTaskList);
  }
  const handleOpenModal=(id:string)=>{
    setCurrId(id);
    toggle()
  }
    return(
        <div className={s.todos}>
            <TodosModal isShowing={isShowing} toggle={toggle} onSave={changeTask}/>
          <Text>
            Todos 
          </Text>
          <TaskInput onSubmit={addTask}/>
          <div className={s.todos__list}>
            {taskList.map((task: ITask)=>{
            if(taskFilter==='all'){
              return <RadioItem 
                        onClick={changeTaskStatus} 
                        key={task.id} 
                        isActive={task.isActive} 
                        name={task.id} 
                        text={task.text}
                        onEdit={handleOpenModal}
                        />
            }
            if(taskFilter==='active' && task.isActive){
              return <RadioItem 
                        onClick={changeTaskStatus} 
                        key={task.id} 
                        isActive={task.isActive}
                        name={task.id} 
                        text={task.text}
                        onEdit={handleOpenModal}
                        />
            }
            if(taskFilter==='complited' && !task.isActive){
              return <RadioItem 
                        onClick={changeTaskStatus}  
                        key={task.id} 
                        isActive={task.isActive} 
                        name={task.id} 
                        text={task.text}
                        onEdit={handleOpenModal}
                        />
            }
            })}
          </div>
          <div className={s.todos__menu}>
            <RadioFilter filterList={FilterList} option={taskFilter} onChange={setTaskFilter}/>
            <Button type="button" onClick={clearComplited} variant='clear'>
              <Text>
                clear complited
              </Text>
            </Button>
          </div>
        </div>
    )
}

export default TodosPage;