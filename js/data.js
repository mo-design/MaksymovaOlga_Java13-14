﻿	var obj = {
		
		title: 'Тест по программированию.',
		
		qBase: [
		
				{
				qText: 'Текст вопроса1',
				ansId: 1,
				answers: ['Ответ11 (правильный)', 'Ответ12', 'Ответ13']
				},
						
				{
				qText: 'Текст вопроса2',
				ansId: 3,
				answers: ['Ответ21', 'Ответ22', 'Ответ23 (правильный)']
				},

				{
				qText: 'Текст вопроса3',
				ansId: 1,
				answers: ['Ответ31 (правильный)', 'Ответ32', 'Ответ33']
				},				
		
		
				{
				qText: 'Текст вопроса4',
				ansId: 2,
				answers: ['Ответ41', 'Ответ42 (правильный)', 'Ответ43']
				},
				
				
				{
				qText: 'Текст вопроса5',
				ansId: 3,
				answers: ['Ответ51', 'Ответ52', 'Ответ53 (правильный)']
				}
			],
		
		checkValue: 'Проверить мои результаты',
		result: 0, 
		log: ''
	};
	
	
	

	localStorage.setItem('ProgrammingTest', JSON.stringify(obj));
	
	
	