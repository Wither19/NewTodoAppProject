/*
 * Activity 4.1.3
 *
 * Data attribute:
 * The World Bank:GDP (current US$): OECD National Accounts data files, CC BY 4.0
 */
import java.io.IOException;
import java.util.ArrayList;

public class GDP_JV
{

    // Custom method to print the GDP from the index the find method returns
    public static void printCountryGDP(ArrayList<GDPData> data, String country) {
        int index = GDPSearch.find(data, 0, data.size(), country);

        if (index < 0) {
            index = 0;
        }
        
        System.out.println(data.get(index));
    }

    public static void main(String[] args) throws IOException
    {
        // Use CSV to make list of GDPs
        ArrayList<GDPData> gdps = GDPData.createDataSet("gdp.csv");

        // Display country, and first / last GDP amounts using toString
        // for (GDPData country : gdps) {
        //     System.out.println(country);
        // }

        // Find and display largest GDPs in each continent

        String[] largestGDPS = { "Australia", "Brazil", "China", "Germany", "South Africa", "United States" };

        System.out.println("Countries with the largest GDPs in their continent (2022): \n");

        for (String country : largestGDPS) {
            printCountryGDP(gdps, country);
        }

        System.out.println();

        // Iterate to find the largest 2022 GDP overall

        System.out.println("Largest GDP Overall (2022): \n");

        GDPData best = gdps.get(0);

        for (GDPData country : gdps) {
            double currentGDP = best.getGdpLast();
            double nextGDP = country.getGdpLast();
            
            if (currentGDP < nextGDP) {
                best = country;
            }
        }


        System.out.println(best);
        System.out.println();

        // Find country with the largest GDP growth (1960-2022)

        System.out.println("Largest GDP Growth (1960-2022): \n");

        GDPData mostGrowth = gdps.get(0);

        for (GDPData country : gdps) {
            double currentGDPGrowth = mostGrowth.getGdpLast() - mostGrowth.getGdpFirst();
            double nextGDPGrowth = country.getGdpLast() - country.getGdpFirst();

            if (currentGDPGrowth < nextGDPGrowth) {
                mostGrowth = country;
            }
        }

        System.out.println(mostGrowth);

    }
}