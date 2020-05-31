import http from "./http-render";

class PizzaService {
  get(id) {
    return http.get(`/pizzas/${id}`);
  }
}

export default new PizzaService();
