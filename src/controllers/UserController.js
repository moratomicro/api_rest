import User from '../models/User';

class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: 'Luiz Alexandre',
      email: 'luizbe@gmail.com',
      password: '123456',
    });
    res.json(novoUser);
  }
}

export default new UserController();
