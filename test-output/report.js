$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Kowser/IdeaProjects/freeCrmBDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 339841,
  "status": "passed"
});
formatter.before({
  "duration": 132858,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "kp1439",
        "Peoplentech"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6911591641,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 13416891,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 156869286,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4515990933,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 8453839,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1367230513,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 5423347101,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "duration": 690690200,
  "status": "passed"
});
formatter.after({
  "duration": 69565,
  "status": "passed"
});
formatter.after({
  "duration": 48752,
  "status": "passed"
});
});