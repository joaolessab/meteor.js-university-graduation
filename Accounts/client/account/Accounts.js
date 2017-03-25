/* Configurações básicas */
AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'First Name', 
		required: true,
		/* Regex validation */
		re: /(?=.*[a-z])(?=.*[A-Z])/, 
		errStr: '1 lowercase and 1 uppercase letter required'
	},
	{
		_id: 'profession',
		type: 'select',
		select: [
			{
				text: 'Developer',
				value: 'developer'
			},
			{
				text: 'Designer',
				value: 'designer'
			},
			{
				text: 'Other',
				value: 'other'
			}
		]
	}
]);