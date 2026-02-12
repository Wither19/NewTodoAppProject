import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import java.util.ArrayList;

public class DailyIncomeData {

  private String countryCode;
  private String country;
  private int yearFirst;
  private double incomeFirst;
  private int yearCurrent;
  private double incomeCurrent;

  public static ArrayList<DailyIncomeData> createDataSet(String filename) throws IOException {
    ArrayList<DailyIncomeData> data = new ArrayList<DailyIncomeData>();

    Scanner sc = new Scanner(new File(filename));

    String titleRow[] = sc.nextLine().split(",");

    String tokens[];

    int first = 2;
    int current = 229;

    double incomeF = 0.0;
    double incomeC = 0.0;

    while (sc.hasNext()) {
      tokens = sc.nextLine().split(",");
      String countryCode = tokens[0];
      String countryName = tokens[1];

      while (tokens[first].equals("")) {
        first++;
      }
      incomeF = Double.parseDouble(tokens[first]);
      int yearF = Integer.parseInt(titleRow[first]);

      if (!tokens[current].equals("")) {
        incomeC = Double.parseDouble(tokens[current]);
        int yearC = Integer.parseInt(titleRow[current]);
      }

      data.add(new DailyIncomeData(countryCode, countryName, yearF, incomeF, yearC, incomeC));
    }

    sc.close();

    return data;
  }

  public DailyIncomeData(String countryCode, String country, int yearFirst, double incomeFirst, int yearCurrent, double incomeCurrent) {
    countryCode = this.countryCode;
    country = this.country;
    yearFirst = this.yearFirst;
    incomeFirst = this.incomeFirst;
    yearCurrent = this.yearCurrent;
    incomeCurrent = this.incomeCurrent;
  }

  public String getCountryCode() {
    return countryCode;
  }

  public String getCountry() {
    return country;
  }

  public int getYearFirst() {
    return yearFirst;
  }

  public double getIncomeFirst() {
    return incomeFirst;
  }

  public int getYearCurrent() {
    return yearCurrent;
  }

  public double getIncomeCurrent() {
    return incomeCurrent;
  }


  /**
   * Get the String representation of this object
   * 
   * @return country name with first and last year's GDP
   * 
   */
  public String toString() {
    return country + ": " + yearFirst + ": $" + incomeFirst + " " + yearCurrent + ": $" + incomeCurrent;
  }
}
