package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\Kowser\\IdeaProjects\\freeCrmBDDFramework\\src\\main\\java\\Features\\dealsmap.feature",
        glue= {"stepDefinition"},
        format= {"pretty","html:test-output","json:json-output/login.json","junit:junit-output/login.xml"},
        dryRun = false,
        monochrome = true,
        strict = true
        //tags={"@mylogin"} .. ~ sign in from of tests names to ignore
        )

public class TestRunner {
}
