import React from 'react';

export default function Form(props){
  const {animal, person, date, time, text, handleInput, handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Имя</label>
        <div className="col-sm-10">
          <input 
            type="text" 
            placeholder="Имя" 
            className="form-control" 
            name="animal"
            value={animal}
            onChange={handleInput} 
           />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Владелец</label>
        <div className="col-sm-10">
          <input 
            type="text" 
            placeholder="Владелец" 
            className="form-control" 
            name="person" 
            value={person}
            onChange={handleInput} 
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Дата</label>
        <div className="col-sm-10">
          <input 
            type="date" 
            className="form-control" 
            name="date" 
            value={date}
            onChange={handleInput} 
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Время</label>
        <div className="col-sm-10">
          <input 
            type="time" 
            className="form-control" 
            name="time" 
            value={time}
            onChange={handleInput} 
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Заметки</label>
        <div className="col-sm-10">
          <textarea 
            placeholder="Заметки" 
            className="form-control"
            name="text"
            value={text}
            onChange={handleInput} 
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10">
          <input 
            type="submit" 
            className="btn btn-primary" 
            value="Добавить" 
          />
        </div>
      </div>
    </form>
  );
}

