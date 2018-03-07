package stepDefinition;

import Util.Common;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class LoginStepDefinition extends Common{


    @Given("^User is already on Login Page$")
    public void user_is_already_on_Login_Page(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Kowser\\IdeaProjects\\freeCrmBDDFramework\\drivers\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.freecrm.com");
        driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);

    }
    @When("^Title of login page is Free CRM$")
    public void title_of_login_page_is_Free_CRM(){
        String title = driver.getTitle();
        Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software",title);

    }
    @Then("^User enter their \"([^\"]*)\"$")
    public void user_enter_username(String username) {
        driver.findElement(By.xpath(".//input[@name='username']")).sendKeys(username);
        //typeByXpath(readproperties(driver,username),username);
    }
    @And("^User enter \"([^\"]*)\"$")
    public void user_enter_password(String password) {
        driver.findElement(By.xpath(".//input[@name='password']")).sendKeys(password);
    }
    @Then("^User Clicks on login button$")
    public void user_Clicks_on_login_button(){
       WebElement loginBtn = driver.findElement(By.xpath(".//input[@value='Login']"));
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginBtn);
    }
    @Then("^User is on the homepage$")
    public void user_is_on_the_homepage(){
        String title= driver.getTitle();
        Assert.assertEquals("CRMPRO", title);

        driver.close();
    }


}
