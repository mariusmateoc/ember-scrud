import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("clients", function() {
    this.route("new");
  });

  this.resource("client", {
    path: "client/:client_id"
  }, function() {});

  this.resource("projects", function() {
    this.route("new");
  });

  this.resource("project", {
    path: "project/:project_id"
  }, function() {});

  this.resource("employees", function() {
    this.route("new");
  });

  this.resource("employee", {
    path: "employee/:employee_id"
  }, function() {});
});

export default Router;