 var Usuarios = {
    
    Usuarios: 
     [
        {
              id:'1',
              nome: 'Rebeca Tomaz',
              email: 'rebeca@gmail.com',
              telefone:'11 97696-3167',
              senha:'123',
              endereco: [
                {
                    logradouro: 'Rua Bromélia, n°7',
                    bairro:'Jardim das flores',
                    cidade:'São Paulo',
                    estado: 'SP',
                    cep: '20395-098'    
            }
              ]

        },
        {     
              id:'2',
              nome: 'Mariana Alves',
              email: 'mariana@gmail.com',
              telefone: '11 94893-2154',
              senha:'432',
              endereco: [
                {
                    logradouro: 'Rua Rosa, n°3',
                    bairro:'Jardim Asteca',
                    cidade:'Vitória',
                    estado: 'ES',
                    cep: '34527-567'    
            }
              ]

        },
        {
              id:'3',
              nome: 'Vitória Cardoso',
              email: 'vitoria@gmail.com',
              telefone: '11 98452-4178',
              senha: '391',
              endereco: [
                {
                    logradouro: 'Rua lírio, n°11',
                    bairro:'Lagoa Azul',
                    cidade:'Cuiabá',
                    estado:'MT',
                    cep: '23678-234'    
            }
              ]
         }
     ]
 }; 

 var Categorias = {
    
    Categorias:
     [
        {
            nome: 'pizzas',
            imagem:'',
            descricao: 'menu de pizzas em geral (salgada,doces,brotinhos...)'
        },
        {
            nome: 'bebidas',
            imagem:'',
            descricao: 'menu de bebidas em geral (sucos naturais, refrigerantes,cervejas...)'
        },
        {
            nome: 'frutas',
            imagem:'',
            descricao: 'menu de frutas em geral (banana,melancia,kiwi...)'
        },
        {
            nome: 'sobremesas',
            imagem:'',
            descricao: 'menu de sobremesas em geral (sorvetes, chocolates, brownie...)'
        }
     ]
 };

 var Produtos = {

      Produtos:
      [
        {
              id: '1',
              nome: 'Pizza de calabresa com queijo',
              descricao: 'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e calabresa.',
              imagem:'',
              preco: '16,00',
              comentarios: [
                {
                    texto: 'pizza muito boa, e entrega rápida',
                    classificacao:'5',
                    usuario:"Mariana Alves",
                    data:'27.10.2023'
                }
              ]
        },
        {
            id:'2',
            nome: 'Pizza de peperoni com queijo',
            descricao: 'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e peperoni.',
            imagem:'',
            preco: '19,00',
            comentarios: [
                {
                    texto: "queijo da pizza de ótia qualidade!!!",
                    classificacao:'4',
                    usuario:'Vitória Cardoso',
                    data:'13.12.2023'
            }
              ]
        },
        {
            id:'3',
            nome: 'Pizza de peperoni com queijo e tomate',
            descricao: 'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e tomate.',
            imagem:'',
            preco: '16,00',
            comentarios: [
                {
                    texto: 'amei a pizza, vou pedir mais vezes',
                    classificacao:'5',
                    usuario:'Mariana Alves',
                    data:'23.04.2023'
            }
              ]
        },
        {
            id:'4',
            nome: 'Pizza brotinho com queijo e tomate',
            descricao:'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, queijo e tomate.',
            imagem:'',
            preco: '12,00',
            comentarios: [
                {
                    texto: 'a pizza preparada em forno á lenha faz TOTAL diferença',
                    classificacao:'4',
                    usuario:'Bianca Soares',
                    data:'12.05.2023'
            }
              ]
        },
        {
            id:'5',
            nome: 'Pizza de Frango com Catupiry',
            descricao:'Pizza preparada no forno á lenha, contendo massa fininha preparada á moda Italiana, contendo molho de tomate, frango e catupiry *Possui borda extra*',
            imagem:'',
            preco: '19,00',
            comentarios: [
                {
                    texto: 'Peçam a borda extra, recomendo!!',
                    classificacao:'3',
                    usuario:'Guilherme Abel',
                    data:'12.10.2023'
            }
              ]

        },
        {
            id:'6',
            nome: 'Coca - cola 2L',
            descricao: 'Refrigerante Coca-Cola sabor original contém água gaseificada, açúcar, extrato de noz de cola, cafeína, corante caramelo IV, acidulante ácido fosfórico e aroma natural.',
            imagem:'',
            preco: '14,99',
            comentarios: [
                {
                    texto: 'Achei a coca-cola cara',
                    classificacao:'1',
                    usuario:'Vitória Cardoso',
                    data:'04.02.2023'
            }
              ]
        },
        {
            id:'7',
            nome: 'Cerveja Heniken',
            descricao:'Cerveja lager Puro Malte, refrescante , produzida com ingredientes 100% naturais: água, malte e lúpulo',
            imagem:'',
            preco: '17,99',
            comentarios: [
                {
                    texto: 'Cerveja veio geladinha',
                    classificacao:'5',
                    usuario:'Pedro Pedraga',
                    data:'13.10.2023'
            }
              ]
        
        }
    ] 
 }

 module.exports = {Usuarios, Categorias, Produtos}