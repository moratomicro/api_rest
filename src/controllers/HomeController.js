import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz Alexandre',
      sobrenome: 'Morato',
      email: 'luizbe@gmail.com',
      idade: 9,
      peso: 22,
      altura: 1.02,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
