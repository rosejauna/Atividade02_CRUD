CRUD DE DATAS (PF e PJ)

O objetivo desta atualização foi garantir que os campos Data de Nascimento (PF) e Data de Registro (PJ) fossem salvos, lidos e editados corretamente.

Adicionei os campos de data nos objetos principais para que o dado pudesse ser guardado na memória: PF.mjs e PJ.mjs

No PessoaFormOOV2.jsx foi alterado, foi feita a conversão. No DAO local foi adicionado os trechos: dataNascimento: pf.getDataNascimento?.() e dataRegistro: ie.getDataRegistro?.() para procurar e salvar as datas. 

E para finalizar o CRUD no aquivo ListaPessoasV2.jsx adicionei uma nova coluna que exibe a data (Nascimento ou Registro). 

Sendo assim, finalizando a atividade implementar, para que sejam localmente armazenados e gerenciados (através do CRUD) adequadamente no projeto.  

OBS: OU PELO MENOS TENTAMOS 

