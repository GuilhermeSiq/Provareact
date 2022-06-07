insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poderes) 
values ("Madara", "Fez Isso ai", true);

select  id_vilao   		 'id',
		nm_vilao    	 'nome',
		ds_maldades 	 'maldades',
        bt_super_poderes 'super poderes'
        from tb_vilao;
