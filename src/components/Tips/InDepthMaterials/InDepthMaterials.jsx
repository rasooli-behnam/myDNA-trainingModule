import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Paper } from "@material-ui/core";
import GeneticTable from "./GeneticTable";
import ReportTable from "./ReportTable";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  panelDetails: {
    display: "block"
  },
  geneInfoTypography: {
    margin: "20px 0px"
  },
  reportTable: {
    backgroundColor: "#f2f2f2"
  }
});

const data = [
  {
    tableTitle: "Weight gain is associated with the FTO gene",
    columnTitles: {
      first: "FTO genotype",
      second: "Association of this genotype with response to food"
    },
    genotypes: [
      {
        name: "AA",
        shortDesc: "Two increased weight risk variant alleles",
        description:
          "This individual has a higher chance (40-60%) of becoming overweight or obese. They tend to overeat as they can’t easily satisfy their hunger. They may need a specialised diet and exercise program to help keep them fuller for longer and promote weight loss."
      },
      {
        name: "AT",
        shortDesc:
          "One increased weight risk variant allele (A) and one allele not associated with increased weight (T)",
        description:
          "This person has a higher chance (20-30%) of becoming overweight or obese and may have the tendency to eat more than needed to satisfy hunger."
      },
      {
        name: "TT",
        shortDesc: "Two alleles not associated with increased weight",
        description:
          "This individual has a normal risk of becoming overweight or obese."
      }
    ]
  },
  {
    tableTitle: "Increased body size is associated with the MTIF3 gene",
    columnTitles: {
      first: "MTIF3 genotype",
      second: "Association of this genotype with response to food"
    },
    genotypes: [
      {
        name: "GG",
        shortDesc: "Two increased BMI risk variant alleles",
        description:
          "This individual has a higher chance of having increased body mass index (BMI). The good news is that this individual is also most likely to keep the weight off after dieting"
      },
      {
        name: "AG",
        shortDesc:
          "One increased BMI risk variant allele (G) and one allele not associated with increased BMI (A)",
        description:
          "This individual has a higher chance of having increased body mass index (BMI). The good news is that this individual is also more likely to keep the weight off after dieting"
      },
      {
        name: "AA",
        shortDesc: "Two alleles not associated with increased BMI",
        description:
          "This genotype has not been associated with increased BMI, hence has a normal risk of gaining weight."
      }
    ]
  },
  {
    tableTitle:
      "The PPARG gene promotes fat storage in the presence of excess food. It’s also known as the “thrifty gene”.",
    columnTitles: {
      first: "PPARG genotype ",
      second:
        "Association of this genotype with conversion of excess energy to fat storage"
    },
    genotypes: [
      {
        name: "CC",
        shortDesc: "Two ‘normal’ functioning alleles",
        description:
          "These individuals have the tendency to store excess energy from food as body fat. This is a typical result but puts the individuals at a higher risk of gaining weight"
      },
      {
        name: "CG",
        shortDesc:
          "One protective weight gain risk variant allele (G) and one ‘normal’ functioning allele (C)",
        description:
          "These individuals may be less likely to gain weight from excess energy consumption compared to the CC genotype."
      },
      {
        name: "GG",
        shortDesc: "Two productive weight gain risk alleles",
        description:
          "These individuals may be less likely to gain weight from excess energy consumption compared to the CC genotype."
      }
    ]
  },
  {
    tableTitle:
      "The ADIPOQ gene contains information to produce adiponectin, a fat burning hormone",
    columnTitles: {
      first: "ADIPOQ genotype",
      second:
        "Association of this genotype with conversion of excess energy to fat storage"
    },
    genotypes: [
      {
        name: "GG",
        shortDesc: "Two reduced adiponectin levels risk variant alleles",
        description:
          "This individual is likely to have the lowest levels of adiponectin and a higher chance of being obese, when compared to the TT genotype"
      },
      {
        name: "GT",
        shortDesc:
          "One reduced adiponectin levels risk variant allele (G) and one allele not associated with reduced adiponectin levels (T)",
        description:
          "This individual is likely to have a moderate reduction in the levels of adiponectin and a higher chance of being obese, when compared to the TT genotype"
      },
      {
        name: "TT",
        shortDesc: "Two alleles not associated with reduced adiponectin levels",
        description:
          "This genotype has not been associated with reduced adiponectin levels or an increased risk of obesity"
      }
    ]
  },
  {
    tableTitle: "The APOA5 gene influences triglyceride levels",
    columnTitles: {
      first: "APOA5 genotype ",
      second: "Association of this genotype with triglyceride levels"
    },
    genotypes: [
      {
        name: "CC",
        shortDesc: "Two increased triglycerides risk variant alleles",
        description:
          "These individuals have an increased risk of high triglyceride levels"
      },
      {
        name: "CT",
        shortDesc:
          "One increased triglycerides risk variant allele (C) and one allele not associated with increased triglycerides (T)",
        description:
          "These individuals are at a slightly increased risk of high triglyceride levels"
      },
      {
        name: "TT",
        shortDesc: "Two alleles not associated with increased triglycerides",
        description:
          "These individuals have a typical risk of increased triglyceride levels"
      }
    ]
  },
  {
    tableTitle:
      "The LIPC gene is involved in the regulation of lipids (HDL and LDL cholesterol and triglycerides)",
    columnTitles: {
      first: "LIPC genotype",
      second: "Association of this genotype with an altered lipid profile"
    },
    genotypes: [
      {
        name: "TT",
        shortDesc: "Two altered lipid profile risk variant alleles",
        description:
          "These individuals are at an increased risk of an altered lipid profile"
      },
      {
        name: "CT",
        shortDesc:
          "One altered lipid profile risk variant allele (T) and one allele not associated with an altered lipid profile (C)",
        description:
          "These individuals have some increase in their risk of an altered lipid profile"
      },
      {
        name: "CC",
        shortDesc:
          "Two alleles not associated with an increased risk of altered lipid profile.",
        description:
          "These individuals are expected to have a typical risk of an altered lipid profile"
      }
    ]
  },
  {
    tableTitle:
      "The FADS1 gene is involved in the processing of omega-3 and omega-6 fatty acids and can influence the lipid profile",
    columnTitles: {
      first: "FADS1 genotype",
      second: "Association of this genotype with an abnormal lipid profile"
    },
    genotypes: [
      {
        name: "TT",
        shortDesc: "Two abnormal lipid profile risk variant alleles",
        description:
          "These individuals have a higher likelihood of having omega-3 and omega-6 imbalances. This results in having a higher chance of an abnormal lipid profile"
      },
      {
        name: "CT",
        shortDesc:
          "One abnormal lipid profile risk variant allele (T) and one allele not associated with an abnormal lipid profile (C)",
        description:
          "These individuals have a moderate likelihood of having omega-3 and omega-6 imbalances. This may result in having a higher chance of an abnormal lipid profile"
      },
      {
        name: "CC",
        shortDesc:
          "Two alleles not associated with an increased risk of abnormal lipid profile.",
        description:
          "These individuals are expected to have normal processing of omega-3 and omega-6 fatty acids leading to typical levels of these, and a typical risk of an abnormal lipid profile"
      }
    ]
  }
];

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Genetic information contained in the report
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
          <Typography className={classes.geneInfoTypography}>
            <b>DNA is a blueprint for life.</b>
          </Typography>
          <Typography className={classes.geneInfoTypography}>
            <b>DNA is made up of thousands of genes</b> and these genes are made
            up of combinations of four nucleotide bases identified by the
            letters A, C, T, G.
          </Typography>
          <Typography className={classes.geneInfoTypography}>
            <b>
              The pattern of these base letters makes each person a unique
              individual,
            </b>{" "}
            and helps direct their development, responses to things like food,
            and other various aspects of their life.
          </Typography>
          <Typography className={classes.geneInfoTypography}>
            Genes are inherited in pairs and the variations of these genes are
            called alleles.{" "}
            <b>The combination of two alleles is the individuals genotype.</b>
          </Typography>

          <GeneticTable />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Overview of what a genetic result may mean for weight management or
            their lipid profile
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
          {data.map(i => (
            <Paper className={classes.reportTable}>
              <ReportTable data={i} />
            </Paper>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(SimpleExpansionPanel);
