import java.util.ArrayList;
import java.io.IOException;

public class Daily_Income_JV {
  public static void main(String[] args) throws IOException {
    ArrayList<DailyIncomeData> data = DailyIncomeData.createDataSet("avg_daily_income.csv");
    for (DailyIncomeData d : data) {
      System.out.println(d);
    }
  }
}
