// (C) 2024 GoodData Corporation

/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2024-02-05T12:17:04.421Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import {
    newAttribute,
    newMeasure,
    IAttribute,
    IMeasure,
    IMeasureDefinition,
    idRef,
} from "@gooddata/sdk-model";

/**
 * Attribute Title: Account
 * Attribute ID: attr.f_account.account
 */
export const Account = {
    /**
     * Display Form Title: Account
     * Display Form ID: attr.f_account.account
     */
    Default: newAttribute("attr.f_account.account"),
    /**
     * Display Form Title: Name
     * Display Form ID: label.f_account.account.name
     */ Name: newAttribute("label.f_account.account.name"),
};
/**
 * Attribute Title: Activity
 * Attribute ID: attr.f_activity.activity
 */
export const Activity = {
    /**
     * Display Form Title: Subject
     * Display Form ID: label.f_activity.subject
     */
    Subject: newAttribute("label.f_activity.subject"),
    /**
     * Display Form Title: Activity
     * Display Form ID: attr.f_activity.activity
     */ Default: newAttribute("attr.f_activity.activity"),
};
/**
 * Attribute Title: Opportunity
 * Attribute ID: attr.f_opportunity.opportunity
 */
export const Opportunity = {
    /**
     * Display Form Title: Opportunity Name
     * Display Form ID: label.f_opportunity.opportunity.name
     */
    Name: newAttribute("label.f_opportunity.opportunity.name"),
    /**
     * Display Form Title: Opportunity
     * Display Form ID: attr.f_opportunity.opportunity
     */ Default: newAttribute("attr.f_opportunity.opportunity"),
    /**
     * Display Form Title: SFDC URL
     * Display Form ID: label.f_opportunity.opportunity.sfdcurl
     */ SFDCURL: newAttribute("label.f_opportunity.opportunity.sfdcurl"),
};
/**
 * Attribute Title: Opp. Snapshot
 * Attribute ID: attr.f_opportunitysnapshot.oppsnapshot
 */
export const OppSnapshot: IAttribute = newAttribute("attr.f_opportunitysnapshot.oppsnapshot");
/**
 * Attribute Title: Sales Rep
 * Attribute ID: attr.f_owner.salesrep
 */
export const SalesRep = {
    /**
     * Display Form Title: Sales Rep
     * Display Form ID: attr.f_owner.salesrep
     */
    Default: newAttribute("attr.f_owner.salesrep"),
    /**
     * Display Form Title: Owner Name
     * Display Form ID: label.f_owner.salesrep.ownername
     */ OwnerName: newAttribute("label.f_owner.salesrep.ownername"),
};
/**
 * Attribute Title: Product
 * Attribute ID: attr.f_product.product
 */
export const Product = {
    /**
     * Display Form Title: Product
     * Display Form ID: attr.f_product.product
     */
    Default: newAttribute("attr.f_product.product"),
    /**
     * Display Form Title: Product Name
     * Display Form ID: label.f_product.product.name
     */ Name: newAttribute("label.f_product.product.name"),
};
/**
 * Attribute Title: Stage History
 * Attribute ID: attr.f_stagehistory.stagehistory
 */
export const StageHistory: IAttribute = newAttribute("attr.f_stagehistory.stagehistory");
/**
 * Attribute Title: Stage Name
 * Attribute ID: attr.f_stage.stagename
 */
export const StageName = {
    /**
     * Display Form Title: Stage Name
     * Display Form ID: label.f_stage.stagename.stagename
     */
    Default: newAttribute("label.f_stage.stagename.stagename"),
    /**
     * Display Form Title: Stage Name
     * Display Form ID: attr.f_stage.stagename
     */ _1: newAttribute("attr.f_stage.stagename"),
    /**
     * Display Form Title: Order
     * Display Form ID: label.f_stage.stagename.order
     */ Order: newAttribute("label.f_stage.stagename.order"),
};
/**
 * Attribute Title: County name
 * Attribute ID: county_name
 */
export const CountyName: IAttribute = newAttribute("county_name");
/**
 * Attribute Title: Account Id
 * Attribute ID: f_account.id
 */
export const AccountId: IAttribute = newAttribute("f_account.id");
/**
 * Attribute Title: Activity Type
 * Attribute ID: f_activity.activitytype_id
 */
export const ActivityType: IAttribute = newAttribute("f_activity.activitytype_id");
/**
 * Attribute Title: Activity Id
 * Attribute ID: f_activity.id
 */
export const ActivityId: IAttribute = newAttribute("f_activity.id");
/**
 * Attribute Title: Is Closed?
 * Attribute ID: f_activity.isclosed_id
 */
export const IsClosed: IAttribute = newAttribute("f_activity.isclosed_id");
/**
 * Attribute Title: Is Task?
 * Attribute ID: f_activity.istask_id
 */
export const IsTask: IAttribute = newAttribute("f_activity.istask_id");
/**
 * Attribute Title: Priority
 * Attribute ID: f_activity.priority_id
 */
export const Priority: IAttribute = newAttribute("f_activity.priority_id");
/**
 * Attribute Title: Status
 * Attribute ID: f_activity.status_id
 */
export const Status: IAttribute = newAttribute("f_activity.status_id");
/**
 * Attribute Title: City
 * Attribute ID: f_city.id
 */
export const City = {
    /**
     * Display Form Title: City name
     * Display Form ID: f_city.id.cityname
     */
    Name: newAttribute("f_city.id.cityname"),
    /**
     * Display Form Title: Location
     * Display Form ID: f_city.id.location
     */ Location: newAttribute("f_city.id.location"),
    /**
     * Display Form Title: Latitude
     * Display Form ID: f_city.id.latitude
     */ Latitude: newAttribute("f_city.id.latitude"),
    /**
     * Display Form Title: Longitude
     * Display Form ID: f_city.id.longitude
     */ Longitude: newAttribute("f_city.id.longitude"),
    /**
     * Display Form Title: City
     * Display Form ID: f_city.id
     */ Default: newAttribute("f_city.id"),
    /**
     * Display Form Title: City ascii name
     * Display Form ID: f_city.id.cityasciiname
     */ AsciiName: newAttribute("f_city.id.cityasciiname"),
    /**
     * Display Form Title: City short name
     * Display Form ID: f_city.id.cityshortname
     */ ShortName: newAttribute("f_city.id.cityshortname"),
};
/**
 * Attribute Title: Opportunity Id
 * Attribute ID: f_opportunity.id
 */
export const OpportunityId: IAttribute = newAttribute("f_opportunity.id");
/**
 * Attribute Title: Forecast Category
 * Attribute ID: f_opportunitysnapshot.forecastcategory_id
 */
export const ForecastCategory: IAttribute = newAttribute("f_opportunitysnapshot.forecastcategory_id");
/**
 * Attribute Title: Opp. Snapshot Id
 * Attribute ID: f_opportunitysnapshot.id
 */
export const OppSnapshotId: IAttribute = newAttribute("f_opportunitysnapshot.id");
/**
 * Attribute Title: Department
 * Attribute ID: f_owner.department_id
 */
export const Department = {
    /**
     * Display Form Title: Department
     * Display Form ID: f_owner.department_id
     */
    Default: newAttribute("f_owner.department_id"),
    /**
     * Display Form Title: Department hyperlink
     * Display Form ID: f_owner.department_id.departmenthyperlink
     */ Hyperlink: newAttribute("f_owner.department_id.departmenthyperlink"),
};
/**
 * Attribute Title: Owner Id
 * Attribute ID: f_owner.id
 */
export const OwnerId: IAttribute = newAttribute("f_owner.id");
/**
 * Attribute Title: Region
 * Attribute ID: f_owner.region_id
 */
export const Region = {
    /**
     * Display Form Title: Region
     * Display Form ID: f_owner.region_id
     */
    Default: newAttribute("f_owner.region_id"),
    /**
     * Display Form Title: Region hyperlink
     * Display Form ID: f_owner.region_id.regionhyperlink
     */ Hyperlink: newAttribute("f_owner.region_id.regionhyperlink"),
};
/**
 * Attribute Title: Product Id
 * Attribute ID: f_product.id
 */
export const ProductId: IAttribute = newAttribute("f_product.id");
/**
 * Attribute Title: Stage History Id
 * Attribute ID: f_stagehistory.id
 */
export const StageHistoryId: IAttribute = newAttribute("f_stagehistory.id");
/**
 * Attribute Title: Stage Id
 * Attribute ID: f_stage.id
 */
export const StageId: IAttribute = newAttribute("f_stage.id");
/**
 * Attribute Title: Is Active?
 * Attribute ID: f_stage.isactive_id
 */
export const IsActive: IAttribute = newAttribute("f_stage.isactive_id");
/**
 * Attribute Title: Is Closed?
 * Attribute ID: f_stage.isclosed_id
 */
export const IsClosed_1: IAttribute = newAttribute("f_stage.isclosed_id");
/**
 * Attribute Title: Is Won?
 * Attribute ID: f_stage.iswon_id
 */
export const IsWon: IAttribute = newAttribute("f_stage.iswon_id");
/**
 * Attribute Title: Status
 * Attribute ID: f_stage.status_id
 */
export const Status_1: IAttribute = newAttribute("f_stage.status_id");
/**
 * Attribute Title: Timeline
 * Attribute ID: f_timeline.id
 */
export const Timeline: IAttribute = newAttribute("f_timeline.id");
/**
 * Attribute Title: State
 * Attribute ID: state_id
 */
export const State = {
    /**
     * Display Form Title: State
     * Display Form ID: state_id
     */
    Default: newAttribute("state_id"),
    /**
     * Display Form Title: State name
     * Display Form ID: state_id.statename
     */ Name: newAttribute("state_id.statename"),
};
/**
 * Attribute Title: Product that is renamed to test the long attribute name
 * Attribute ID: productthatisrenamedtotestthelongattributename
 */
export const ProductThatIsRenamedToTestTheLongAttributeName = {
    /**
     * Display Form Title: Product that is renamed to test the long attribute name
     * Display Form ID: productthatisrenamedtotestthelongattributename
     */
    Default: newAttribute("productthatisrenamedtotestthelongattributename"),
    /**
     * Display Form Title: Product that is renamed to test the long attribute name hyperlink
     * Display Form ID: productthatisrenamedtotestthelongattributename.productthatisrenamedtotestthelongattributenamehyperlink
     */ Hyperlink: newAttribute(
        "productthatisrenamedtotestthelongattributename.productthatisrenamedtotestthelongattributenamehyperlink",
    ),
};
/**
 * Metric Title: 2 literals in datetime_diff
 * Metric ID: 2_literals_in_datetime_diff
 * Metric Type: MAQL Metric
 */
export const _2LiteralsInDatetimeDiff: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("2_literals_in_datetime_diff", "measure"),
);
/**
 * Metric Title: _Timeline [EOP]
 * Metric ID: 6b1411d5-e253-418e-8fd3-137a9f56ea92
 * Metric Type: MAQL Metric
 */
export const TimelineEOP: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("6b1411d5-e253-418e-8fd3-137a9f56ea92", "measure"),
);
/**
 * Metric Title: # Of Opportunities
 * Metric ID: 768414e1-4bbe-4f01-b125-0cdc6305dc76
 * Metric Type: MAQL Metric
 */
export const NrOfOpportunities: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("768414e1-4bbe-4f01-b125-0cdc6305dc76", "measure"),
);
/**
 * Metric Title: Amount
 * Metric ID: 87a053b0-3947-49f3-b0c5-de53fd01f050
 * Metric Type: MAQL Metric
 */
export const Amount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("87a053b0-3947-49f3-b0c5-de53fd01f050", "measure"),
);
/**
 * Metric Title: # Of Opportunities Won
 * Metric ID: 8d33a0b1-cfdf-4074-a26a-4c4357774967
 * Metric Type: MAQL Metric
 */
export const NrOfOpportunitiesWon: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("8d33a0b1-cfdf-4074-a26a-4c4357774967", "measure"),
);
/**
 * Metric Title: Win Rate
 * Metric ID: 973a14c4-acb1-45fb-ba52-5d96fa02f7ba
 * Metric Type: MAQL Metric
 */
export const WinRate: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("973a14c4-acb1-45fb-ba52-5d96fa02f7ba", "measure"),
);
/**
 * Metric Title: Amount [BOP]
 * Metric ID: amount_bop
 * Metric Type: MAQL Metric
 */
export const AmountBOP: IMeasure<IMeasureDefinition> = newMeasure(idRef("amount_bop", "measure"));
/**
 * Metric Title: Argument bigger granularity
 * Metric ID: argument_bigger_granularity
 * Metric Type: MAQL Metric
 */
export const ArgumentBiggerGranularity: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("argument_bigger_granularity", "measure"),
);
/**
 * Metric Title: Avg. Amount
 * Metric ID: avg._amount
 * Metric Type: MAQL Metric
 */
export const AvgAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("avg._amount", "measure"));
/**
 * Metric Title: Probability
 * Metric ID: b4e3e3c7-ead3-4d69-8be4-23bcfe5ff7aa
 * Metric Type: MAQL Metric
 */
export const Probability: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("b4e3e3c7-ead3-4d69-8be4-23bcfe5ff7aa", "measure"),
);
/**
 * Metric Title: Best Case
 * Metric ID: best_case
 * Metric Type: MAQL Metric
 */
export const BestCase: IMeasure<IMeasureDefinition> = newMeasure(idRef("best_case", "measure"));
/**
 * Metric Title: _Snapshot [EOP]
 * Metric ID: c5ee7836-126c-41aa-bd69-1873d379a065
 * Metric Type: MAQL Metric
 */
export const SnapshotEOP: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("c5ee7836-126c-41aa-bd69-1873d379a065", "measure"),
);
/**
 * Metric Title: _Close [BOP]
 * Metric ID: close_bop
 * Metric Type: MAQL Metric
 */
export const CloseBOP: IMeasure<IMeasureDefinition> = newMeasure(idRef("close_bop", "measure"));
/**
 * Metric Title: _Close [EOP]
 * Metric ID: close_eop
 * Metric Type: MAQL Metric
 */
export const CloseEOP: IMeasure<IMeasureDefinition> = newMeasure(idRef("close_eop", "measure"));
/**
 * Metric Title: Count of sales rep and datetime condition
 * Metric ID: count_of_sales_rep_and_datetime_condition
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepAndDatetimeCondition: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_of_sales_rep_and_datetime_condition", "measure"),
);
/**
 * Metric Title: Count of sales rep with datetime add and max
 * Metric ID: count_of_sales_rep_with_datetime_add_and_max
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepWithDatetimeAddAndMax: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_of_sales_rep_with_datetime_add_and_max", "measure"),
);
/**
 * Metric Title: Count of sales rep with datetime and previous
 * Metric ID: count_of_sales_rep_with_datetime_and_previous
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepWithDatetimeAndPrevious: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_of_sales_rep_with_datetime_and_previous", "measure"),
);
/**
 * Metric Title: Count of sales rep with diff and 3 difference params
 * Metric ID: count_of_sales_rep_with_diff_and_3_difference_params
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepWithDiffAnd3DifferenceParams: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_of_sales_rep_with_diff_and_3_difference_params", "measure"),
);
/**
 * Metric Title: Count of sales rep with diff and add
 * Metric ID: count_of_sales_rep_with_diff_and_add
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepWithDiffAndAdd: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_of_sales_rep_with_diff_and_add", "measure"),
);
/**
 * Metric Title: Count of sales rep with diff and max by all other
 * Metric ID: count_of_sales_rep_with_diff_and_max_by_all_other
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepWithDiffAndMaxByAllOther: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_of_sales_rep_with_diff_and_max_by_all_other", "measure"),
);
/**
 * Metric Title: Count of sales reps with diff and max condition
 * Metric ID: count_sales_reps_with_diff_and_max_condition
 * Metric Type: MAQL Metric
 */
export const CountOfSalesRepsWithDiffAndMaxCondition: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("count_sales_reps_with_diff_and_max_condition", "measure"),
);
/**
 * Metric Title: Datetime add of day
 * Metric ID: datetime_add_of_day
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfDay: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_day", "measure"),
);
/**
 * Metric Title: Datetime add of hour
 * Metric ID: datetime_add_of_hour
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfHour: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_hour", "measure"),
);
/**
 * Metric Title: Datetime add of minute
 * Metric ID: datetime_add_of_minute
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfMinute: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_minute", "measure"),
);
/**
 * Metric Title: Datetime add of month
 * Metric ID: datetime_add_of_month
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfMonth: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_month", "measure"),
);
/**
 * Metric Title: Datetime add of this year
 * Metric ID: datetime_add_of_this_year
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfThisYear: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_this_year", "measure"),
);
/**
 * Metric Title: Datetime add of week
 * Metric ID: datetime_add_of_week
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfWeek: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_week", "measure"),
);
/**
 * Metric Title: Datetime add of year
 * Metric ID: datetime_add_of_year
 * Metric Type: MAQL Metric
 */
export const DatetimeAddOfYear: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_of_year", "measure"),
);
/**
 * Metric Title: Datetime add with if else
 * Metric ID: datetime_add_with_if_else
 * Metric Type: MAQL Metric
 */
export const DatetimeAddWithIfElse: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_with_if_else", "measure"),
);
/**
 * Metric Title: Datetime_add with quarter
 * Metric ID: datetime_add_with_quarter
 * Metric Type: MAQL Metric
 */
export const DatetimeAddWithQuarter: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_add_with_quarter", "measure"),
);
/**
 * Metric Title: Diff of month (2 difference params)
 * Metric ID: datetime_diff_of_month_2_diffrence_params
 * Metric Type: MAQL Metric
 */
export const DiffOfMonth2DifferenceParams: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_month_2_diffrence_params", "measure"),
);
/**
 * Metric Title: Diff of month (2 params and string)
 * Metric ID: datetime_diff_of_month_2_params_string
 * Metric Type: MAQL Metric
 */
export const DiffOfMonth2ParamsAndString: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_month_2_params_string", "measure"),
);
/**
 * Metric Title: Diff of month (2 same params)
 * Metric ID: datetime_diff_of_month_2_same_params
 * Metric Type: MAQL Metric
 */
export const DiffOfMonth2SameParams: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_month_2_same_params", "measure"),
);
/**
 * Metric Title: Diff of month (3 difference params)
 * Metric ID: datetime_diff_of_month_3_diffenrence_params
 * Metric Type: MAQL Metric
 */
export const DiffOfMonth3DifferenceParams: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_month_3_diffenrence_params", "measure"),
);
/**
 * Metric Title: Diff of month (3 parameters)
 * Metric ID: datetime_diff_of_month_3_parameters
 * Metric Type: MAQL Metric
 */
export const DiffOfMonth3Parameters: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_month_3_parameters", "measure"),
);
/**
 * Metric Title: Diff of month (3 params and string)
 * Metric ID: datetime_diff_of_month_3_params_string
 * Metric Type: MAQL Metric
 */
export const DiffOfMonth3ParamsAndString: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_month_3_params_string", "measure"),
);
/**
 * Metric Title: Diff of week (2 same params)
 * Metric ID: datetime_diff_of_week_2_same_params
 * Metric Type: MAQL Metric
 */
export const DiffOfWeek2SameParams: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_week_2_same_params", "measure"),
);
/**
 * Metric Title: Diff of week (3 parameters)
 * Metric ID: datetime_diff_of_week_3_parameters
 * Metric Type: MAQL Metric
 */
export const DiffOfWeek3Parameters: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_week_3_parameters", "measure"),
);
/**
 * Metric Title: Diff of week (month week)
 * Metric ID: datetime_diff_of_week_month_week
 * Metric Type: MAQL Metric
 */
export const DiffOfWeekMonthWeek: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_week_month_week", "measure"),
);
/**
 * Metric Title: Diff of week (week year)
 * Metric ID: datetime_diff_of_week_week_year
 * Metric Type: MAQL Metric
 */
export const DiffOfWeekWeekYear: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_week_week_year", "measure"),
);
/**
 * Metric Title: Diff of year (2 parameters)
 * Metric ID: datetime_diff_of_year_2_parameters
 * Metric Type: MAQL Metric
 */
export const DiffOfYear2Parameters: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_2_parameters", "measure"),
);
/**
 * Metric Title: Diff of year (3 parameters)
 * Metric ID: datetime_diff_of_year_3_parameters
 * Metric Type: MAQL Metric
 */
export const DiffOfYear3Parameters: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_3_parameters", "measure"),
);
/**
 * Metric Title: Diff of year (next)
 * Metric ID: datetime_diff_of_year_next
 * Metric Type: MAQL Metric
 */
export const DiffOfYearNext: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_next", "measure"),
);
/**
 * Metric Title: Diff of year (previous)
 * Metric ID: datetime_diff_of_year_previous
 * Metric Type: MAQL Metric
 */
export const DiffOfYearPrevious: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_previous", "measure"),
);
/**
 * Metric Title: Diff of year (previous and next)
 * Metric ID: datetime_diff_of_year_previous_next
 * Metric Type: MAQL Metric
 */
export const DiffOfYearPreviousAndNext: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_previous_next", "measure"),
);
/**
 * Metric Title: Diff of year (string)
 * Metric ID: datetime_diff_of_year_string
 * Metric Type: MAQL Metric
 */
export const DiffOfYearString: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_string", "measure"),
);
/**
 * Metric Title: Diff of year (string and this)
 * Metric ID: datetime_diff_of_year_string_and_this
 * Metric Type: MAQL Metric
 */
export const DiffOfYearStringAndThis: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_of_year_string_and_this", "measure"),
);
/**
 * Metric Title: Datetime_diff with quarter
 * Metric ID: datetime_diff_with_quarter
 * Metric Type: MAQL Metric
 */
export const DatetimeDiffWithQuarter: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("datetime_diff_with_quarter", "measure"),
);
/**
 * Metric Title: Diff of week (string)
 * Metric ID: diff_of_week_string
 * Metric Type: MAQL Metric
 */
export const DiffOfWeekString: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("diff_of_week_string", "measure"),
);
/**
 * Metric Title: Parent metric
 * Metric ID: e519fa2a-86c3-4e32-8313-0c03061626b1
 * Metric Type: MAQL Metric
 */
export const ParentMetric: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("e519fa2a-86c3-4e32-8313-0c03061626b1", "measure"),
);
/**
 * Metric Title: Won
 * Metric ID: e519fa2a-86c3-4e32-8313-0c03062348j3
 * Metric Type: MAQL Metric
 */
export const Won: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("e519fa2a-86c3-4e32-8313-0c03062348j3", "measure"),
);
/**
 * Metric Title: Filter time transformation (datetime add)
 * Metric ID: filter_time_transformation_datetime_add
 * Metric Type: MAQL Metric
 */
export const FilterTimeTransformationDatetimeAdd: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("filter_time_transformation_datetime_add", "measure"),
);
/**
 * Metric Title: First value of amount by quarter
 * Metric ID: first_value_of_amount_by_quarter
 * Metric Type: MAQL Metric
 */
export const FirstValueOfAmountByQuarter: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_amount_by_quarter", "measure"),
);
/**
 * Metric Title: First value of amount by sales rep
 * Metric ID: first_value_of_amount_by_sales_rep
 * Metric Type: MAQL Metric
 */
export const FirstValueOfAmountBySalesRep: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_amount_by_sales_rep", "measure"),
);
/**
 * Metric Title: First value of amount order asc
 * Metric ID: first_value_of_amount_order_asc
 * Metric Type: MAQL Metric
 */
export const FirstValueOfAmountOrderAsc: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_amount_order_asc", "measure"),
);
/**
 * Metric Title: First value of amount order desc
 * Metric ID: first_value_of_amount_order_desc
 * Metric Type: MAQL Metric
 */
export const FirstValueOfAmountOrderDesc: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_amount_order_desc", "measure"),
);
/**
 * Metric Title: First value of amount with previous
 * Metric ID: first_value_of_amount_with_previous
 * Metric Type: MAQL Metric
 */
export const FirstValueOfAmountWithPrevious: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_amount_with_previous", "measure"),
);
/**
 * Metric Title: First value of rank amount
 * Metric ID: first_value_of_rank_amount
 * Metric Type: MAQL Metric
 */
export const FirstValueOfRankAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_rank_amount", "measure"),
);
/**
 * Metric Title: Last value of runvar amount
 * Metric ID: first_value_of_runvar_amount
 * Metric Type: MAQL Metric
 */
export const LastValueOfRunvarAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_runvar_amount", "measure"),
);
/**
 * Metric Title: First value of runvar amount
 * Metric ID: first_value_of_runvar_amount_2
 * Metric Type: MAQL Metric
 */
export const FirstValueOfRunvarAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("first_value_of_runvar_amount_2", "measure"),
);
/**
 * Metric Title: For Next first value of amount
 * Metric ID: for_next_first_value_of_amount
 * Metric Type: MAQL Metric
 */
export const ForNextFirstValueOfAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("for_next_first_value_of_amount", "measure"),
);
/**
 * Metric Title: For Next last value of amount
 * Metric ID: for_next_last_value_of_amount
 * Metric Type: MAQL Metric
 */
export const ForNextLastValueOfAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("for_next_last_value_of_amount", "measure"),
);
/**
 * Metric Title: For Previous first value of amount
 * Metric ID: for_previous_first_value_of_amount
 * Metric Type: MAQL Metric
 */
export const ForPreviousFirstValueOfAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("for_previous_first_value_of_amount", "measure"),
);
/**
 * Metric Title: For Previous last value of amount
 * Metric ID: for_previous_last_value_of_amount
 * Metric Type: MAQL Metric
 */
export const ForPreviousLastValueOfAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("for_previous_last_value_of_amount", "measure"),
);
/**
 * Metric Title: Incorrect literal string with datetime_add with day
 * Metric ID: incorrect_literal_string_with_datetime_add_with_day
 * Metric Type: MAQL Metric
 */
export const IncorrectLiteralStringWithDatetimeAddWithDay: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("incorrect_literal_string_with_datetime_add_with_day", "measure"),
);
/**
 * Metric Title: Incorrect literal string with datetime_add with month
 * Metric ID: incorrect_literal_string_with_datetime_add_with_month
 * Metric Type: MAQL Metric
 */
export const IncorrectLiteralStringWithDatetimeAddWithMonth: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("incorrect_literal_string_with_datetime_add_with_month", "measure"),
);
/**
 * Metric Title: Incorrect literal string with datetime_diff
 * Metric ID: incorrect_literal_string_with_datetime_diff
 * Metric Type: MAQL Metric
 */
export const IncorrectLiteralStringWithDatetimeDiff: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("incorrect_literal_string_with_datetime_diff", "measure"),
);
/**
 * Metric Title: Last value of amount by quarter
 * Metric ID: last_value_of_amount_by_quarter
 * Metric Type: MAQL Metric
 */
export const LastValueOfAmountByQuarter: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("last_value_of_amount_by_quarter", "measure"),
);
/**
 * Metric Title: Last value of amount by sales rep
 * Metric ID: last_value_of_amount_by_sales_rep
 * Metric Type: MAQL Metric
 */
export const LastValueOfAmountBySalesRep: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("last_value_of_amount_by_sales_rep", "measure"),
);
/**
 * Metric Title: Last value of amount order asc
 * Metric ID: last_value_of_amount_order_asc
 * Metric Type: MAQL Metric
 */
export const LastValueOfAmountOrderAsc: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("last_value_of_amount_order_asc", "measure"),
);
/**
 * Metric Title: Last value of amount order desc
 * Metric ID: last_value_of_amount_order_desc
 * Metric Type: MAQL Metric
 */
export const LastValueOfAmountOrderDesc: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("last_value_of_amount_order_desc", "measure"),
);
/**
 * Metric Title: Last value of amount with previous
 * Metric ID: last_value_of_amount_with_previous
 * Metric Type: MAQL Metric
 */
export const LastValueOfAmountWithPrevious: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("last_value_of_amount_with_previous", "measure"),
);
/**
 * Metric Title: Last value of rank amount
 * Metric ID: last_value_of_rank_amount
 * Metric Type: MAQL Metric
 */
export const LastValueOfRankAmount: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("last_value_of_rank_amount", "measure"),
);
/**
 * Metric Title: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
 * Metric ID: lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore_magna_aliqua._ut_enim_ad_minim_veniam_quis_nostrud_exercitation_ullamco_laboris_nisi_ut_aliquip_ex_ea_commodo_consequat._duis_aute_irure_dolor_i
 * Metric Type: MAQL Metric
 */
export const LoremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorI: IMeasure<IMeasureDefinition> =
    newMeasure(
        idRef(
            "lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore_magna_aliqua._ut_enim_ad_minim_veniam_quis_nostrud_exercitation_ullamco_laboris_nisi_ut_aliquip_ex_ea_commodo_consequat._duis_aute_irure_dolor_i",
            "measure",
        ),
    );
/**
 * Metric Title: select1
 * Metric ID: m1
 * Metric Type: MAQL Metric
 */
export const Select1: IMeasure<IMeasureDefinition> = newMeasure(idRef("m1", "measure"));
/**
 * Metric Title: Maximum literal of datetime_add
 * Metric ID: maximum_literal_of_datetime_add
 * Metric Type: MAQL Metric
 */
export const MaximumLiteralOfDatetimeAdd: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("maximum_literal_of_datetime_add", "measure"),
);
/**
 * Metric Title: Max of top level
 * Metric ID: max_of_top_level
 * Metric Type: MAQL Metric
 */
export const MaxOfTopLevel: IMeasure<IMeasureDefinition> = newMeasure(idRef("max_of_top_level", "measure"));
/**
 * Metric Title: Metric has null value
 * Metric ID: metric_has_null_value
 * Metric Type: MAQL Metric
 */
export const MetricHasNullValue: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("metric_has_null_value", "measure"),
);
/**
 * Metric Title: MetricHasNegative
 * Metric ID: metric_negative
 * Metric Type: MAQL Metric
 */
export const MetricHasNegative: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("metric_negative", "measure"),
);
/**
 * Metric Title: MetricNegative
 * Metric ID: metricnegative
 * Metric Type: MAQL Metric
 */
export const MetricNegative: IMeasure<IMeasureDefinition> = newMeasure(idRef("metricnegative", "measure"));
/**
 * Metric Title: Missing required datetime_add granularity
 * Metric ID: missing_required_datetime_add_granularity
 * Metric Type: MAQL Metric
 */
export const MissingRequiredDatetimeAddGranularity: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("missing_required_datetime_add_granularity", "measure"),
);
/**
 * Metric Title: Negative Metric
 * Metric ID: negative_metric
 * Metric Type: MAQL Metric
 */
export const NegativeMetric: IMeasure<IMeasureDefinition> = newMeasure(idRef("negative_metric", "measure"));
/**
 * Metric Title: Not allow datetime types for datetime_diff
 * Metric ID: not_allow_datetime_types_for_datetime_diff
 * Metric Type: MAQL Metric
 */
export const NotAllowDatetimeTypesForDatetimeDiff: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("not_allow_datetime_types_for_datetime_diff", "measure"),
);
/**
 * Metric Title: Not enough context for MAX
 * Metric ID: not_enough_context_for_max
 * Metric Type: MAQL Metric
 */
export const NotEnoughContextForMAX: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("not_enough_context_for_max", "measure"),
);
/**
 * Metric Title: Not enough context for MIN
 * Metric ID: not_enough_context_for_min
 * Metric Type: MAQL Metric
 */
export const NotEnoughContextForMIN: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("not_enough_context_for_min", "measure"),
);
/**
 * Metric Title: No Time transformation
 * Metric ID: no_time_transformation
 * Metric Type: MAQL Metric
 */
export const NoTimeTransformation: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("no_time_transformation", "measure"),
);
/**
 * Metric Title: # of Activities
 * Metric ID: of_activities
 * Metric Type: MAQL Metric
 */
export const NrOfActivities: IMeasure<IMeasureDefinition> = newMeasure(idRef("of_activities", "measure"));
/**
 * Metric Title: # of Lost Opps.
 * Metric ID: of_lost_opps.
 * Metric Type: MAQL Metric
 */
export const NrOfLostOpps: IMeasure<IMeasureDefinition> = newMeasure(idRef("of_lost_opps.", "measure"));
/**
 * Metric Title: # of Won Opps.
 * Metric ID: of_won_opps.
 * Metric Type: MAQL Metric
 */
export const NrOfWonOpps: IMeasure<IMeasureDefinition> = newMeasure(idRef("of_won_opps.", "measure"));
/**
 * Metric Title: _Opp. First Snapshot
 * Metric ID: opp._first_snapshot
 * Metric Type: MAQL Metric
 */
export const OppFirstSnapshot: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("opp._first_snapshot", "measure"),
);
/**
 * Metric Title: Runsum first value of amount with condition
 * Metric ID: runsum_first_value_of_amount_with_condition
 * Metric Type: MAQL Metric
 */
export const RunsumFirstValueOfAmountWithCondition: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("runsum_first_value_of_amount_with_condition", "measure"),
);
/**
 * Metric Title: Runsum last value of amount with condition
 * Metric ID: runsum_last_value_of_amount_with_condition
 * Metric Type: MAQL Metric
 */
export const RunsumLastValueOfAmountWithCondition: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("runsum_last_value_of_amount_with_condition", "measure"),
);
/**
 * Metric Title: select2
 * Metric ID: select_2
 * Metric Type: MAQL Metric
 */
export const Select2: IMeasure<IMeasureDefinition> = newMeasure(idRef("select_2", "measure"));
/**
 * Metric Title: select 8
 * Metric ID: select_8
 * Metric Type: MAQL Metric
 */
export const Select8: IMeasure<IMeasureDefinition> = newMeasure(idRef("select_8", "measure"));
/**
 * Metric Title: _Snapshot [BOP]
 * Metric ID: snapshot_bop
 * Metric Type: MAQL Metric
 */
export const SnapshotBOP: IMeasure<IMeasureDefinition> = newMeasure(idRef("snapshot_bop", "measure"));
/**
 * Metric Title: Sum amount with datetime_add and between
 * Metric ID: sum_amount_with_datetime_add_and_between
 * Metric Type: MAQL Metric
 */
export const SumAmountWithDatetimeAddAndBetween: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_amount_with_datetime_add_and_between", "measure"),
);
/**
 * Metric Title: Sum amount with datetime_add and not between
 * Metric ID: sum_amount_with_datetime_add_and_not_between
 * Metric Type: MAQL Metric
 */
export const SumAmountWithDatetimeAddAndNotBetween: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_amount_with_datetime_add_and_not_between", "measure"),
);
/**
 * Metric Title: Sum of amount between max created year and previous year
 * Metric ID: sum_of_amount_between_max_created_year_and_previous_year
 * Metric Type: MAQL Metric
 */
export const SumOfAmountBetweenMaxCreatedYearAndPreviousYear: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_of_amount_between_max_created_year_and_previous_year", "measure"),
);
/**
 * Metric Title: Sum of amount not between max created year and this year
 * Metric ID: sum_of_amount_not_between_max_created_year_and_this_year
 * Metric Type: MAQL Metric
 */
export const SumOfAmountNotBetweenMaxCreatedYearAndThisYear: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_of_amount_not_between_max_created_year_and_this_year", "measure"),
);
/**
 * Metric Title: Sum of amount with case and max
 * Metric ID: sum_of_amount_with_case_and_max
 * Metric Type: MAQL Metric
 */
export const SumOfAmountWithCaseAndMax: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_of_amount_with_case_and_max", "measure"),
);
/**
 * Metric Title: Top level of datetime_add
 * Metric ID: top_level_of_datetime_add
 * Metric Type: MAQL Metric
 */
export const TopLevelOfDatetimeAdd: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("top_level_of_datetime_add", "measure"),
);
/**
 * Metric Title: Top level metric for MAX
 * Metric ID: top_level_metric_for_max
 * Metric Type: MAQL Metric
 */
export const TopLevelMetricForMAX: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("top_level_metric_for_max", "measure"),
);
/**
 * Metric Title: Top level metric for MIN
 * Metric ID: top_level_metric_for_min
 * Metric Type: MAQL Metric
 */
export const TopLevelMetricForMIN: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("top_level_metric_for_min", "measure"),
);
/**
 * Metric Title: Time transformation (combined)
 * Metric ID: time_transformation_combined
 * Metric Type: MAQL Metric
 */
export const TimeTransformationCombined: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("time_transformation_combined", "measure"),
);
/**
 * Metric Title: Time transformation
 * Metric ID: time_transformation
 * Metric Type: MAQL Metric
 */
export const TimeTransformation: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("time_transformation", "measure"),
);
/**
 * Metric Title: Sum of amount with min and by all other except
 * Metric ID: sum_of_amount_with_min_and_by_all_other_except
 * Metric Type: MAQL Metric
 */
export const SumOfAmountWithMinAndByAllOtherExcept: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_of_amount_with_min_and_by_all_other_except", "measure"),
);
/**
 * Metric Title: Sum of amount with min and by all other
 * Metric ID: sum_of_amount_with_min_and_by_all_other
 * Metric Type: MAQL Metric
 */
export const SumOfAmountWithMinAndByAllOther: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_of_amount_with_min_and_by_all_other", "measure"),
);
/**
 * Metric Title: Sum of amount with if, having and min
 * Metric ID: sum_of_amount_with_if_having_and_min
 * Metric Type: MAQL Metric
 */
export const SumOfAmountWithIfHavingAndMin: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("sum_of_amount_with_if_having_and_min", "measure"),
);
/**
 * Metric Title: _Timeline [BOP]
 * Metric ID: timeline_bop
 * Metric Type: MAQL Metric
 */
export const TimelineBOP: IMeasure<IMeasureDefinition> = newMeasure(idRef("timeline_bop", "measure"));
/**
 * Fact Title: Activity (Date)
 * Fact ID: fact.f_activity.activitydate
 */
export const ActivityDate = {
    /**
     * Fact Title: Activity (Date)
     * Fact ID: fact.f_activity.activitydate
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.f_activity.activitydate", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Activity (Date)
     * Fact ID: fact.f_activity.activitydate
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.f_activity.activitydate", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Activity (Date)
     * Fact ID: fact.f_activity.activitydate
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.f_activity.activitydate", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Activity (Date)
     * Fact ID: fact.f_activity.activitydate
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.f_activity.activitydate", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Activity (Date)
     * Fact ID: fact.f_activity.activitydate
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.f_activity.activitydate", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Activity (Date)
     * Fact ID: fact.f_activity.activitydate
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.f_activity.activitydate", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Opp. Created (Date)
 * Fact ID: fact.f_opportunity.oppcreateddate
 */
export const OppCreatedDate = {
    /**
     * Fact Title: Opp. Created (Date)
     * Fact ID: fact.f_opportunity.oppcreateddate
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.f_opportunity.oppcreateddate", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Opp. Created (Date)
     * Fact ID: fact.f_opportunity.oppcreateddate
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.f_opportunity.oppcreateddate", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Opp. Created (Date)
     * Fact ID: fact.f_opportunity.oppcreateddate
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.f_opportunity.oppcreateddate", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Opp. Created (Date)
     * Fact ID: fact.f_opportunity.oppcreateddate
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.f_opportunity.oppcreateddate", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Opp. Created (Date)
     * Fact ID: fact.f_opportunity.oppcreateddate
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.f_opportunity.oppcreateddate", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Opp. Created (Date)
     * Fact ID: fact.f_opportunity.oppcreateddate
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.f_opportunity.oppcreateddate", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Opp. Close (Date)
 * Fact ID: fact.f_opportunitysnapshot.oppclosedate
 */
export const OppCloseDate = {
    /**
     * Fact Title: Opp. Close (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppclosedate
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.f_opportunitysnapshot.oppclosedate", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Opp. Close (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppclosedate
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.f_opportunitysnapshot.oppclosedate", "fact"), (m) =>
        m.aggregation("avg"),
    ),
    /**
     * Fact Title: Opp. Close (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppclosedate
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.f_opportunitysnapshot.oppclosedate", "fact"), (m) =>
        m.aggregation("min"),
    ),
    /**
     * Fact Title: Opp. Close (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppclosedate
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.f_opportunitysnapshot.oppclosedate", "fact"), (m) =>
        m.aggregation("max"),
    ),
    /**
     * Fact Title: Opp. Close (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppclosedate
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.f_opportunitysnapshot.oppclosedate", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Opp. Close (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppclosedate
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.f_opportunitysnapshot.oppclosedate", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Opp. Snapshot (Date)
 * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
 */
export const OppSnapshotDate = {
    /**
     * Fact Title: Opp. Snapshot (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.f_opportunitysnapshot.oppsnapshotdate", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Opp. Snapshot (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.f_opportunitysnapshot.oppsnapshotdate", "fact"), (m) =>
        m.aggregation("avg"),
    ),
    /**
     * Fact Title: Opp. Snapshot (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.f_opportunitysnapshot.oppsnapshotdate", "fact"), (m) =>
        m.aggregation("min"),
    ),
    /**
     * Fact Title: Opp. Snapshot (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.f_opportunitysnapshot.oppsnapshotdate", "fact"), (m) =>
        m.aggregation("max"),
    ),
    /**
     * Fact Title: Opp. Snapshot (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.f_opportunitysnapshot.oppsnapshotdate", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Opp. Snapshot (Date)
     * Fact ID: fact.f_opportunitysnapshot.oppsnapshotdate
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.f_opportunitysnapshot.oppsnapshotdate", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Timeline (Date)
 * Fact ID: fact.f_timeline.timelinedate
 */
export const TimelineDate = {
    /**
     * Fact Title: Timeline (Date)
     * Fact ID: fact.f_timeline.timelinedate
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.f_timeline.timelinedate", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Timeline (Date)
     * Fact ID: fact.f_timeline.timelinedate
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.f_timeline.timelinedate", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Timeline (Date)
     * Fact ID: fact.f_timeline.timelinedate
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.f_timeline.timelinedate", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Timeline (Date)
     * Fact ID: fact.f_timeline.timelinedate
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.f_timeline.timelinedate", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Timeline (Date)
     * Fact ID: fact.f_timeline.timelinedate
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.f_timeline.timelinedate", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Timeline (Date)
     * Fact ID: fact.f_timeline.timelinedate
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.f_timeline.timelinedate", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Density
 * Fact ID: f_density
 */
export const Density = {
    /**
     * Fact Title: Density
     * Fact ID: f_density
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_density", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Density
     * Fact ID: f_density
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_density", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Density
     * Fact ID: f_density
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_density", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Density
     * Fact ID: f_density
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_density", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Density
     * Fact ID: f_density
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_density", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Density
     * Fact ID: f_density
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_density", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Amount
 * Fact ID: f_opportunitysnapshot.f_amount
 */
export const Amount_1 = {
    /**
     * Fact Title: Amount
     * Fact ID: f_opportunitysnapshot.f_amount
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_opportunitysnapshot.f_amount", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Amount
     * Fact ID: f_opportunitysnapshot.f_amount
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_opportunitysnapshot.f_amount", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Amount
     * Fact ID: f_opportunitysnapshot.f_amount
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_opportunitysnapshot.f_amount", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Amount
     * Fact ID: f_opportunitysnapshot.f_amount
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_opportunitysnapshot.f_amount", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Amount
     * Fact ID: f_opportunitysnapshot.f_amount
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_opportunitysnapshot.f_amount", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Amount
     * Fact ID: f_opportunitysnapshot.f_amount
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_opportunitysnapshot.f_amount", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Days to Close
 * Fact ID: f_opportunitysnapshot.f_daystoclose
 */
export const DaysToClose = {
    /**
     * Fact Title: Days to Close
     * Fact ID: f_opportunitysnapshot.f_daystoclose
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_opportunitysnapshot.f_daystoclose", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Days to Close
     * Fact ID: f_opportunitysnapshot.f_daystoclose
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_opportunitysnapshot.f_daystoclose", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Days to Close
     * Fact ID: f_opportunitysnapshot.f_daystoclose
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_opportunitysnapshot.f_daystoclose", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Days to Close
     * Fact ID: f_opportunitysnapshot.f_daystoclose
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_opportunitysnapshot.f_daystoclose", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Days to Close
     * Fact ID: f_opportunitysnapshot.f_daystoclose
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_opportunitysnapshot.f_daystoclose", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Days to Close
     * Fact ID: f_opportunitysnapshot.f_daystoclose
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_opportunitysnapshot.f_daystoclose", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Probability
 * Fact ID: f_opportunitysnapshot.f_probability
 */
export const Probability_1 = {
    /**
     * Fact Title: Probability
     * Fact ID: f_opportunitysnapshot.f_probability
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_opportunitysnapshot.f_probability", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Probability
     * Fact ID: f_opportunitysnapshot.f_probability
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_opportunitysnapshot.f_probability", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Probability
     * Fact ID: f_opportunitysnapshot.f_probability
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_opportunitysnapshot.f_probability", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Probability
     * Fact ID: f_opportunitysnapshot.f_probability
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_opportunitysnapshot.f_probability", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Probability
     * Fact ID: f_opportunitysnapshot.f_probability
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_opportunitysnapshot.f_probability", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Probability
     * Fact ID: f_opportunitysnapshot.f_probability
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_opportunitysnapshot.f_probability", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Population
 * Fact ID: f_population
 */
export const Population = {
    /**
     * Fact Title: Population
     * Fact ID: f_population
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_population", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Population
     * Fact ID: f_population
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_population", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Population
     * Fact ID: f_population
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_population", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Population
     * Fact ID: f_population
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_population", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Population
     * Fact ID: f_population
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_population", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Population
     * Fact ID: f_population
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_population", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Duration
 * Fact ID: f_stagehistory.f_duration
 */
export const Duration = {
    /**
     * Fact Title: Duration
     * Fact ID: f_stagehistory.f_duration
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_stagehistory.f_duration", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Duration
     * Fact ID: f_stagehistory.f_duration
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_stagehistory.f_duration", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Duration
     * Fact ID: f_stagehistory.f_duration
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_stagehistory.f_duration", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Duration
     * Fact ID: f_stagehistory.f_duration
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_stagehistory.f_duration", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Duration
     * Fact ID: f_stagehistory.f_duration
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_stagehistory.f_duration", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Duration
     * Fact ID: f_stagehistory.f_duration
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_stagehistory.f_duration", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Velocity
 * Fact ID: f_stagehistory.f_velocity
 */
export const Velocity = {
    /**
     * Fact Title: Velocity
     * Fact ID: f_stagehistory.f_velocity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("f_stagehistory.f_velocity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Velocity
     * Fact ID: f_stagehistory.f_velocity
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("f_stagehistory.f_velocity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Velocity
     * Fact ID: f_stagehistory.f_velocity
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("f_stagehistory.f_velocity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Velocity
     * Fact ID: f_stagehistory.f_velocity
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("f_stagehistory.f_velocity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Velocity
     * Fact ID: f_stagehistory.f_velocity
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("f_stagehistory.f_velocity", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Velocity
     * Fact ID: f_stagehistory.f_velocity
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("f_stagehistory.f_velocity", "fact"), (m) => m.aggregation("runsum")),
};
/** Available Date Data Sets */
export const DateDatasets = {
    /**
     * Date Data Set Title: Activity
     * Date Data Set ID: dt_activity_timestamp
     */
    Activity: {
        ref: idRef("dt_activity_timestamp", "dataSet"),
        identifier: "dt_activity_timestamp",
        /**
         * Date Attribute: Activity - Date
         * Date Attribute ID: dt_activity_timestamp.day
         */ ActivityDate: {
            ref: idRef("dt_activity_timestamp.day", "attribute"),
            identifier: "dt_activity_timestamp.day",
            /**
             * Display Form Title: Activity - Date
             * Display Form ID: dt_activity_timestamp.day
             */ Default: newAttribute("dt_activity_timestamp.day"),
        },
        /**
         * Date Attribute: Activity - Day of Month
         * Date Attribute ID: dt_activity_timestamp.dayOfMonth
         */ ActivityDayOfMonth: {
            ref: idRef("dt_activity_timestamp.dayOfMonth", "attribute"),
            identifier: "dt_activity_timestamp.dayOfMonth",
            /**
             * Display Form Title: Activity - Day of Month
             * Display Form ID: dt_activity_timestamp.dayOfMonth
             */ Default: newAttribute("dt_activity_timestamp.dayOfMonth"),
        },
        /**
         * Date Attribute: Activity - Day of Week
         * Date Attribute ID: dt_activity_timestamp.dayOfWeek
         */ ActivityDayOfWeek: {
            ref: idRef("dt_activity_timestamp.dayOfWeek", "attribute"),
            identifier: "dt_activity_timestamp.dayOfWeek",
            /**
             * Display Form Title: Activity - Day of Week
             * Display Form ID: dt_activity_timestamp.dayOfWeek
             */ Default: newAttribute("dt_activity_timestamp.dayOfWeek"),
        },
        /**
         * Date Attribute: Activity - Day of Year
         * Date Attribute ID: dt_activity_timestamp.dayOfYear
         */ ActivityDayOfYear: {
            ref: idRef("dt_activity_timestamp.dayOfYear", "attribute"),
            identifier: "dt_activity_timestamp.dayOfYear",
            /**
             * Display Form Title: Activity - Day of Year
             * Display Form ID: dt_activity_timestamp.dayOfYear
             */ Default: newAttribute("dt_activity_timestamp.dayOfYear"),
        },
        /**
         * Date Attribute: Activity - Hour
         * Date Attribute ID: dt_activity_timestamp.hour
         */ ActivityHour: {
            ref: idRef("dt_activity_timestamp.hour", "attribute"),
            identifier: "dt_activity_timestamp.hour",
            /**
             * Display Form Title: Activity - Hour
             * Display Form ID: dt_activity_timestamp.hour
             */ Default: newAttribute("dt_activity_timestamp.hour"),
        },
        /**
         * Date Attribute: Activity - Hour of Day
         * Date Attribute ID: dt_activity_timestamp.hourOfDay
         */ ActivityHourOfDay: {
            ref: idRef("dt_activity_timestamp.hourOfDay", "attribute"),
            identifier: "dt_activity_timestamp.hourOfDay",
            /**
             * Display Form Title: Activity - Hour of Day
             * Display Form ID: dt_activity_timestamp.hourOfDay
             */ Default: newAttribute("dt_activity_timestamp.hourOfDay"),
        },
        /**
         * Date Attribute: Activity - Minute
         * Date Attribute ID: dt_activity_timestamp.minute
         */ ActivityMinute: {
            ref: idRef("dt_activity_timestamp.minute", "attribute"),
            identifier: "dt_activity_timestamp.minute",
            /**
             * Display Form Title: Activity - Minute
             * Display Form ID: dt_activity_timestamp.minute
             */ Default: newAttribute("dt_activity_timestamp.minute"),
        },
        /**
         * Date Attribute: Activity - Minute of Hour
         * Date Attribute ID: dt_activity_timestamp.minuteOfHour
         */ ActivityMinuteOfHour: {
            ref: idRef("dt_activity_timestamp.minuteOfHour", "attribute"),
            identifier: "dt_activity_timestamp.minuteOfHour",
            /**
             * Display Form Title: Activity - Minute of Hour
             * Display Form ID: dt_activity_timestamp.minuteOfHour
             */ Default: newAttribute("dt_activity_timestamp.minuteOfHour"),
        },
        /**
         * Date Attribute: Activity - Month/Year
         * Date Attribute ID: dt_activity_timestamp.month
         */ ActivityMonthYear: {
            ref: idRef("dt_activity_timestamp.month", "attribute"),
            identifier: "dt_activity_timestamp.month",
            /**
             * Display Form Title: Activity - Month/Year
             * Display Form ID: dt_activity_timestamp.month
             */ Default: newAttribute("dt_activity_timestamp.month"),
        },
        /**
         * Date Attribute: Activity - Month of Year
         * Date Attribute ID: dt_activity_timestamp.monthOfYear
         */ ActivityMonthOfYear: {
            ref: idRef("dt_activity_timestamp.monthOfYear", "attribute"),
            identifier: "dt_activity_timestamp.monthOfYear",
            /**
             * Display Form Title: Activity - Month of Year
             * Display Form ID: dt_activity_timestamp.monthOfYear
             */ Default: newAttribute("dt_activity_timestamp.monthOfYear"),
        },
        /**
         * Date Attribute: Activity - Quarter/Year
         * Date Attribute ID: dt_activity_timestamp.quarter
         */ ActivityQuarterYear: {
            ref: idRef("dt_activity_timestamp.quarter", "attribute"),
            identifier: "dt_activity_timestamp.quarter",
            /**
             * Display Form Title: Activity - Quarter/Year
             * Display Form ID: dt_activity_timestamp.quarter
             */ Default: newAttribute("dt_activity_timestamp.quarter"),
        },
        /**
         * Date Attribute: Activity - Quarter of Year
         * Date Attribute ID: dt_activity_timestamp.quarterOfYear
         */ ActivityQuarterOfYear: {
            ref: idRef("dt_activity_timestamp.quarterOfYear", "attribute"),
            identifier: "dt_activity_timestamp.quarterOfYear",
            /**
             * Display Form Title: Activity - Quarter of Year
             * Display Form ID: dt_activity_timestamp.quarterOfYear
             */ Default: newAttribute("dt_activity_timestamp.quarterOfYear"),
        },
        /**
         * Date Attribute: Activity - Week/Year
         * Date Attribute ID: dt_activity_timestamp.week
         */ ActivityWeekYear: {
            ref: idRef("dt_activity_timestamp.week", "attribute"),
            identifier: "dt_activity_timestamp.week",
            /**
             * Display Form Title: Activity - Week/Year
             * Display Form ID: dt_activity_timestamp.week
             */ Default: newAttribute("dt_activity_timestamp.week"),
        },
        /**
         * Date Attribute: Activity - Week of Year
         * Date Attribute ID: dt_activity_timestamp.weekOfYear
         */ ActivityWeekOfYear: {
            ref: idRef("dt_activity_timestamp.weekOfYear", "attribute"),
            identifier: "dt_activity_timestamp.weekOfYear",
            /**
             * Display Form Title: Activity - Week of Year
             * Display Form ID: dt_activity_timestamp.weekOfYear
             */ Default: newAttribute("dt_activity_timestamp.weekOfYear"),
        },
        /**
         * Date Attribute: Activity - Year
         * Date Attribute ID: dt_activity_timestamp.year
         */ ActivityYear: {
            ref: idRef("dt_activity_timestamp.year", "attribute"),
            identifier: "dt_activity_timestamp.year",
            /**
             * Display Form Title: Activity - Year
             * Display Form ID: dt_activity_timestamp.year
             */ Default: newAttribute("dt_activity_timestamp.year"),
        },
    },
    /**
     * Date Data Set Title: Closed
     * Date Data Set ID: dt_closedate_timestamp
     */ Closed: {
        ref: idRef("dt_closedate_timestamp", "dataSet"),
        identifier: "dt_closedate_timestamp",
        /**
         * Date Attribute: Closed - Date
         * Date Attribute ID: dt_closedate_timestamp.day
         */ ClosedDate: {
            ref: idRef("dt_closedate_timestamp.day", "attribute"),
            identifier: "dt_closedate_timestamp.day",
            /**
             * Display Form Title: Closed - Date
             * Display Form ID: dt_closedate_timestamp.day
             */ Default: newAttribute("dt_closedate_timestamp.day"),
        },
        /**
         * Date Attribute: Closed - Day of Month
         * Date Attribute ID: dt_closedate_timestamp.dayOfMonth
         */ ClosedDayOfMonth: {
            ref: idRef("dt_closedate_timestamp.dayOfMonth", "attribute"),
            identifier: "dt_closedate_timestamp.dayOfMonth",
            /**
             * Display Form Title: Closed - Day of Month
             * Display Form ID: dt_closedate_timestamp.dayOfMonth
             */ Default: newAttribute("dt_closedate_timestamp.dayOfMonth"),
        },
        /**
         * Date Attribute: Closed - Day of Week
         * Date Attribute ID: dt_closedate_timestamp.dayOfWeek
         */ ClosedDayOfWeek: {
            ref: idRef("dt_closedate_timestamp.dayOfWeek", "attribute"),
            identifier: "dt_closedate_timestamp.dayOfWeek",
            /**
             * Display Form Title: Closed - Day of Week
             * Display Form ID: dt_closedate_timestamp.dayOfWeek
             */ Default: newAttribute("dt_closedate_timestamp.dayOfWeek"),
        },
        /**
         * Date Attribute: Closed - Day of Year
         * Date Attribute ID: dt_closedate_timestamp.dayOfYear
         */ ClosedDayOfYear: {
            ref: idRef("dt_closedate_timestamp.dayOfYear", "attribute"),
            identifier: "dt_closedate_timestamp.dayOfYear",
            /**
             * Display Form Title: Closed - Day of Year
             * Display Form ID: dt_closedate_timestamp.dayOfYear
             */ Default: newAttribute("dt_closedate_timestamp.dayOfYear"),
        },
        /**
         * Date Attribute: Closed - Hour
         * Date Attribute ID: dt_closedate_timestamp.hour
         */ ClosedHour: {
            ref: idRef("dt_closedate_timestamp.hour", "attribute"),
            identifier: "dt_closedate_timestamp.hour",
            /**
             * Display Form Title: Closed - Hour
             * Display Form ID: dt_closedate_timestamp.hour
             */ Default: newAttribute("dt_closedate_timestamp.hour"),
        },
        /**
         * Date Attribute: Closed - Hour of Day
         * Date Attribute ID: dt_closedate_timestamp.hourOfDay
         */ ClosedHourOfDay: {
            ref: idRef("dt_closedate_timestamp.hourOfDay", "attribute"),
            identifier: "dt_closedate_timestamp.hourOfDay",
            /**
             * Display Form Title: Closed - Hour of Day
             * Display Form ID: dt_closedate_timestamp.hourOfDay
             */ Default: newAttribute("dt_closedate_timestamp.hourOfDay"),
        },
        /**
         * Date Attribute: Closed - Minute
         * Date Attribute ID: dt_closedate_timestamp.minute
         */ ClosedMinute: {
            ref: idRef("dt_closedate_timestamp.minute", "attribute"),
            identifier: "dt_closedate_timestamp.minute",
            /**
             * Display Form Title: Closed - Minute
             * Display Form ID: dt_closedate_timestamp.minute
             */ Default: newAttribute("dt_closedate_timestamp.minute"),
        },
        /**
         * Date Attribute: Closed - Minute of Hour
         * Date Attribute ID: dt_closedate_timestamp.minuteOfHour
         */ ClosedMinuteOfHour: {
            ref: idRef("dt_closedate_timestamp.minuteOfHour", "attribute"),
            identifier: "dt_closedate_timestamp.minuteOfHour",
            /**
             * Display Form Title: Closed - Minute of Hour
             * Display Form ID: dt_closedate_timestamp.minuteOfHour
             */ Default: newAttribute("dt_closedate_timestamp.minuteOfHour"),
        },
        /**
         * Date Attribute: Closed - Month/Year
         * Date Attribute ID: dt_closedate_timestamp.month
         */ ClosedMonthYear: {
            ref: idRef("dt_closedate_timestamp.month", "attribute"),
            identifier: "dt_closedate_timestamp.month",
            /**
             * Display Form Title: Closed - Month/Year
             * Display Form ID: dt_closedate_timestamp.month
             */ Default: newAttribute("dt_closedate_timestamp.month"),
        },
        /**
         * Date Attribute: Closed - Month of Year
         * Date Attribute ID: dt_closedate_timestamp.monthOfYear
         */ ClosedMonthOfYear: {
            ref: idRef("dt_closedate_timestamp.monthOfYear", "attribute"),
            identifier: "dt_closedate_timestamp.monthOfYear",
            /**
             * Display Form Title: Closed - Month of Year
             * Display Form ID: dt_closedate_timestamp.monthOfYear
             */ Default: newAttribute("dt_closedate_timestamp.monthOfYear"),
        },
        /**
         * Date Attribute: Closed - Quarter/Year
         * Date Attribute ID: dt_closedate_timestamp.quarter
         */ ClosedQuarterYear: {
            ref: idRef("dt_closedate_timestamp.quarter", "attribute"),
            identifier: "dt_closedate_timestamp.quarter",
            /**
             * Display Form Title: Closed - Quarter/Year
             * Display Form ID: dt_closedate_timestamp.quarter
             */ Default: newAttribute("dt_closedate_timestamp.quarter"),
        },
        /**
         * Date Attribute: Closed - Quarter of Year
         * Date Attribute ID: dt_closedate_timestamp.quarterOfYear
         */ ClosedQuarterOfYear: {
            ref: idRef("dt_closedate_timestamp.quarterOfYear", "attribute"),
            identifier: "dt_closedate_timestamp.quarterOfYear",
            /**
             * Display Form Title: Closed - Quarter of Year
             * Display Form ID: dt_closedate_timestamp.quarterOfYear
             */ Default: newAttribute("dt_closedate_timestamp.quarterOfYear"),
        },
        /**
         * Date Attribute: Closed - Week/Year
         * Date Attribute ID: dt_closedate_timestamp.week
         */ ClosedWeekYear: {
            ref: idRef("dt_closedate_timestamp.week", "attribute"),
            identifier: "dt_closedate_timestamp.week",
            /**
             * Display Form Title: Closed - Week/Year
             * Display Form ID: dt_closedate_timestamp.week
             */ Default: newAttribute("dt_closedate_timestamp.week"),
        },
        /**
         * Date Attribute: Closed - Week of Year
         * Date Attribute ID: dt_closedate_timestamp.weekOfYear
         */ ClosedWeekOfYear: {
            ref: idRef("dt_closedate_timestamp.weekOfYear", "attribute"),
            identifier: "dt_closedate_timestamp.weekOfYear",
            /**
             * Display Form Title: Closed - Week of Year
             * Display Form ID: dt_closedate_timestamp.weekOfYear
             */ Default: newAttribute("dt_closedate_timestamp.weekOfYear"),
        },
        /**
         * Date Attribute: Closed - Year
         * Date Attribute ID: dt_closedate_timestamp.year
         */ ClosedYear: {
            ref: idRef("dt_closedate_timestamp.year", "attribute"),
            identifier: "dt_closedate_timestamp.year",
            /**
             * Display Form Title: Closed - Year
             * Display Form ID: dt_closedate_timestamp.year
             */ Default: newAttribute("dt_closedate_timestamp.year"),
        },
    },
    /**
     * Date Data Set Title: Created
     * Date Data Set ID: dt_oppcreated_timestamp
     */ Created: {
        ref: idRef("dt_oppcreated_timestamp", "dataSet"),
        identifier: "dt_oppcreated_timestamp",
        /**
         * Date Attribute: Created - Date
         * Date Attribute ID: dt_oppcreated_timestamp.day
         */ CreatedDate: {
            ref: idRef("dt_oppcreated_timestamp.day", "attribute"),
            identifier: "dt_oppcreated_timestamp.day",
            /**
             * Display Form Title: Created - Date
             * Display Form ID: dt_oppcreated_timestamp.day
             */ Default: newAttribute("dt_oppcreated_timestamp.day"),
        },
        /**
         * Date Attribute: Created - Day of Month
         * Date Attribute ID: dt_oppcreated_timestamp.dayOfMonth
         */ CreatedDayOfMonth: {
            ref: idRef("dt_oppcreated_timestamp.dayOfMonth", "attribute"),
            identifier: "dt_oppcreated_timestamp.dayOfMonth",
            /**
             * Display Form Title: Created - Day of Month
             * Display Form ID: dt_oppcreated_timestamp.dayOfMonth
             */ Default: newAttribute("dt_oppcreated_timestamp.dayOfMonth"),
        },
        /**
         * Date Attribute: Created - Day of Week
         * Date Attribute ID: dt_oppcreated_timestamp.dayOfWeek
         */ CreatedDayOfWeek: {
            ref: idRef("dt_oppcreated_timestamp.dayOfWeek", "attribute"),
            identifier: "dt_oppcreated_timestamp.dayOfWeek",
            /**
             * Display Form Title: Created - Day of Week
             * Display Form ID: dt_oppcreated_timestamp.dayOfWeek
             */ Default: newAttribute("dt_oppcreated_timestamp.dayOfWeek"),
        },
        /**
         * Date Attribute: Created - Day of Year
         * Date Attribute ID: dt_oppcreated_timestamp.dayOfYear
         */ CreatedDayOfYear: {
            ref: idRef("dt_oppcreated_timestamp.dayOfYear", "attribute"),
            identifier: "dt_oppcreated_timestamp.dayOfYear",
            /**
             * Display Form Title: Created - Day of Year
             * Display Form ID: dt_oppcreated_timestamp.dayOfYear
             */ Default: newAttribute("dt_oppcreated_timestamp.dayOfYear"),
        },
        /**
         * Date Attribute: Created - Hour
         * Date Attribute ID: dt_oppcreated_timestamp.hour
         */ CreatedHour: {
            ref: idRef("dt_oppcreated_timestamp.hour", "attribute"),
            identifier: "dt_oppcreated_timestamp.hour",
            /**
             * Display Form Title: Created - Hour
             * Display Form ID: dt_oppcreated_timestamp.hour
             */ Default: newAttribute("dt_oppcreated_timestamp.hour"),
        },
        /**
         * Date Attribute: Created - Hour of Day
         * Date Attribute ID: dt_oppcreated_timestamp.hourOfDay
         */ CreatedHourOfDay: {
            ref: idRef("dt_oppcreated_timestamp.hourOfDay", "attribute"),
            identifier: "dt_oppcreated_timestamp.hourOfDay",
            /**
             * Display Form Title: Created - Hour of Day
             * Display Form ID: dt_oppcreated_timestamp.hourOfDay
             */ Default: newAttribute("dt_oppcreated_timestamp.hourOfDay"),
        },
        /**
         * Date Attribute: Created - Minute
         * Date Attribute ID: dt_oppcreated_timestamp.minute
         */ CreatedMinute: {
            ref: idRef("dt_oppcreated_timestamp.minute", "attribute"),
            identifier: "dt_oppcreated_timestamp.minute",
            /**
             * Display Form Title: Created - Minute
             * Display Form ID: dt_oppcreated_timestamp.minute
             */ Default: newAttribute("dt_oppcreated_timestamp.minute"),
        },
        /**
         * Date Attribute: Created - Minute of Hour
         * Date Attribute ID: dt_oppcreated_timestamp.minuteOfHour
         */ CreatedMinuteOfHour: {
            ref: idRef("dt_oppcreated_timestamp.minuteOfHour", "attribute"),
            identifier: "dt_oppcreated_timestamp.minuteOfHour",
            /**
             * Display Form Title: Created - Minute of Hour
             * Display Form ID: dt_oppcreated_timestamp.minuteOfHour
             */ Default: newAttribute("dt_oppcreated_timestamp.minuteOfHour"),
        },
        /**
         * Date Attribute: Created - Month/Year
         * Date Attribute ID: dt_oppcreated_timestamp.month
         */ CreatedMonthYear: {
            ref: idRef("dt_oppcreated_timestamp.month", "attribute"),
            identifier: "dt_oppcreated_timestamp.month",
            /**
             * Display Form Title: Created - Month/Year
             * Display Form ID: dt_oppcreated_timestamp.month
             */ Default: newAttribute("dt_oppcreated_timestamp.month"),
        },
        /**
         * Date Attribute: Created - Month of Year
         * Date Attribute ID: dt_oppcreated_timestamp.monthOfYear
         */ CreatedMonthOfYear: {
            ref: idRef("dt_oppcreated_timestamp.monthOfYear", "attribute"),
            identifier: "dt_oppcreated_timestamp.monthOfYear",
            /**
             * Display Form Title: Created - Month of Year
             * Display Form ID: dt_oppcreated_timestamp.monthOfYear
             */ Default: newAttribute("dt_oppcreated_timestamp.monthOfYear"),
        },
        /**
         * Date Attribute: Created - Quarter/Year
         * Date Attribute ID: dt_oppcreated_timestamp.quarter
         */ CreatedQuarterYear: {
            ref: idRef("dt_oppcreated_timestamp.quarter", "attribute"),
            identifier: "dt_oppcreated_timestamp.quarter",
            /**
             * Display Form Title: Created - Quarter/Year
             * Display Form ID: dt_oppcreated_timestamp.quarter
             */ Default: newAttribute("dt_oppcreated_timestamp.quarter"),
        },
        /**
         * Date Attribute: Created - Quarter of Year
         * Date Attribute ID: dt_oppcreated_timestamp.quarterOfYear
         */ CreatedQuarterOfYear: {
            ref: idRef("dt_oppcreated_timestamp.quarterOfYear", "attribute"),
            identifier: "dt_oppcreated_timestamp.quarterOfYear",
            /**
             * Display Form Title: Created - Quarter of Year
             * Display Form ID: dt_oppcreated_timestamp.quarterOfYear
             */ Default: newAttribute("dt_oppcreated_timestamp.quarterOfYear"),
        },
        /**
         * Date Attribute: Created - Week/Year
         * Date Attribute ID: dt_oppcreated_timestamp.week
         */ CreatedWeekYear: {
            ref: idRef("dt_oppcreated_timestamp.week", "attribute"),
            identifier: "dt_oppcreated_timestamp.week",
            /**
             * Display Form Title: Created - Week/Year
             * Display Form ID: dt_oppcreated_timestamp.week
             */ Default: newAttribute("dt_oppcreated_timestamp.week"),
        },
        /**
         * Date Attribute: Created - Week of Year
         * Date Attribute ID: dt_oppcreated_timestamp.weekOfYear
         */ CreatedWeekOfYear: {
            ref: idRef("dt_oppcreated_timestamp.weekOfYear", "attribute"),
            identifier: "dt_oppcreated_timestamp.weekOfYear",
            /**
             * Display Form Title: Created - Week of Year
             * Display Form ID: dt_oppcreated_timestamp.weekOfYear
             */ Default: newAttribute("dt_oppcreated_timestamp.weekOfYear"),
        },
        /**
         * Date Attribute: Created - Year
         * Date Attribute ID: dt_oppcreated_timestamp.year
         */ CreatedYear: {
            ref: idRef("dt_oppcreated_timestamp.year", "attribute"),
            identifier: "dt_oppcreated_timestamp.year",
            /**
             * Display Form Title: Created - Year
             * Display Form ID: dt_oppcreated_timestamp.year
             */ Default: newAttribute("dt_oppcreated_timestamp.year"),
        },
    },
    /**
     * Date Data Set Title: Snapshot
     * Date Data Set ID: dt_snapshotdate_timestamp
     */ Snapshot: {
        ref: idRef("dt_snapshotdate_timestamp", "dataSet"),
        identifier: "dt_snapshotdate_timestamp",
        /**
         * Date Attribute: Snapshot - Date
         * Date Attribute ID: dt_snapshotdate_timestamp.day
         */ SnapshotDate: {
            ref: idRef("dt_snapshotdate_timestamp.day", "attribute"),
            identifier: "dt_snapshotdate_timestamp.day",
            /**
             * Display Form Title: Snapshot - Date
             * Display Form ID: dt_snapshotdate_timestamp.day
             */ Default: newAttribute("dt_snapshotdate_timestamp.day"),
        },
        /**
         * Date Attribute: Snapshot - Day of Month
         * Date Attribute ID: dt_snapshotdate_timestamp.dayOfMonth
         */ SnapshotDayOfMonth: {
            ref: idRef("dt_snapshotdate_timestamp.dayOfMonth", "attribute"),
            identifier: "dt_snapshotdate_timestamp.dayOfMonth",
            /**
             * Display Form Title: Snapshot - Day of Month
             * Display Form ID: dt_snapshotdate_timestamp.dayOfMonth
             */ Default: newAttribute("dt_snapshotdate_timestamp.dayOfMonth"),
        },
        /**
         * Date Attribute: Snapshot - Day of Week
         * Date Attribute ID: dt_snapshotdate_timestamp.dayOfWeek
         */ SnapshotDayOfWeek: {
            ref: idRef("dt_snapshotdate_timestamp.dayOfWeek", "attribute"),
            identifier: "dt_snapshotdate_timestamp.dayOfWeek",
            /**
             * Display Form Title: Snapshot - Day of Week
             * Display Form ID: dt_snapshotdate_timestamp.dayOfWeek
             */ Default: newAttribute("dt_snapshotdate_timestamp.dayOfWeek"),
        },
        /**
         * Date Attribute: Snapshot - Day of Year
         * Date Attribute ID: dt_snapshotdate_timestamp.dayOfYear
         */ SnapshotDayOfYear: {
            ref: idRef("dt_snapshotdate_timestamp.dayOfYear", "attribute"),
            identifier: "dt_snapshotdate_timestamp.dayOfYear",
            /**
             * Display Form Title: Snapshot - Day of Year
             * Display Form ID: dt_snapshotdate_timestamp.dayOfYear
             */ Default: newAttribute("dt_snapshotdate_timestamp.dayOfYear"),
        },
        /**
         * Date Attribute: Snapshot - Hour
         * Date Attribute ID: dt_snapshotdate_timestamp.hour
         */ SnapshotHour: {
            ref: idRef("dt_snapshotdate_timestamp.hour", "attribute"),
            identifier: "dt_snapshotdate_timestamp.hour",
            /**
             * Display Form Title: Snapshot - Hour
             * Display Form ID: dt_snapshotdate_timestamp.hour
             */ Default: newAttribute("dt_snapshotdate_timestamp.hour"),
        },
        /**
         * Date Attribute: Snapshot - Hour of Day
         * Date Attribute ID: dt_snapshotdate_timestamp.hourOfDay
         */ SnapshotHourOfDay: {
            ref: idRef("dt_snapshotdate_timestamp.hourOfDay", "attribute"),
            identifier: "dt_snapshotdate_timestamp.hourOfDay",
            /**
             * Display Form Title: Snapshot - Hour of Day
             * Display Form ID: dt_snapshotdate_timestamp.hourOfDay
             */ Default: newAttribute("dt_snapshotdate_timestamp.hourOfDay"),
        },
        /**
         * Date Attribute: Snapshot - Minute
         * Date Attribute ID: dt_snapshotdate_timestamp.minute
         */ SnapshotMinute: {
            ref: idRef("dt_snapshotdate_timestamp.minute", "attribute"),
            identifier: "dt_snapshotdate_timestamp.minute",
            /**
             * Display Form Title: Snapshot - Minute
             * Display Form ID: dt_snapshotdate_timestamp.minute
             */ Default: newAttribute("dt_snapshotdate_timestamp.minute"),
        },
        /**
         * Date Attribute: Snapshot - Minute of Hour
         * Date Attribute ID: dt_snapshotdate_timestamp.minuteOfHour
         */ SnapshotMinuteOfHour: {
            ref: idRef("dt_snapshotdate_timestamp.minuteOfHour", "attribute"),
            identifier: "dt_snapshotdate_timestamp.minuteOfHour",
            /**
             * Display Form Title: Snapshot - Minute of Hour
             * Display Form ID: dt_snapshotdate_timestamp.minuteOfHour
             */ Default: newAttribute("dt_snapshotdate_timestamp.minuteOfHour"),
        },
        /**
         * Date Attribute: Snapshot - Month/Year
         * Date Attribute ID: dt_snapshotdate_timestamp.month
         */ SnapshotMonthYear: {
            ref: idRef("dt_snapshotdate_timestamp.month", "attribute"),
            identifier: "dt_snapshotdate_timestamp.month",
            /**
             * Display Form Title: Snapshot - Month/Year
             * Display Form ID: dt_snapshotdate_timestamp.month
             */ Default: newAttribute("dt_snapshotdate_timestamp.month"),
        },
        /**
         * Date Attribute: Snapshot - Month of Year
         * Date Attribute ID: dt_snapshotdate_timestamp.monthOfYear
         */ SnapshotMonthOfYear: {
            ref: idRef("dt_snapshotdate_timestamp.monthOfYear", "attribute"),
            identifier: "dt_snapshotdate_timestamp.monthOfYear",
            /**
             * Display Form Title: Snapshot - Month of Year
             * Display Form ID: dt_snapshotdate_timestamp.monthOfYear
             */ Default: newAttribute("dt_snapshotdate_timestamp.monthOfYear"),
        },
        /**
         * Date Attribute: Snapshot - Quarter/Year
         * Date Attribute ID: dt_snapshotdate_timestamp.quarter
         */ SnapshotQuarterYear: {
            ref: idRef("dt_snapshotdate_timestamp.quarter", "attribute"),
            identifier: "dt_snapshotdate_timestamp.quarter",
            /**
             * Display Form Title: Snapshot - Quarter/Year
             * Display Form ID: dt_snapshotdate_timestamp.quarter
             */ Default: newAttribute("dt_snapshotdate_timestamp.quarter"),
        },
        /**
         * Date Attribute: Snapshot - Quarter of Year
         * Date Attribute ID: dt_snapshotdate_timestamp.quarterOfYear
         */ SnapshotQuarterOfYear: {
            ref: idRef("dt_snapshotdate_timestamp.quarterOfYear", "attribute"),
            identifier: "dt_snapshotdate_timestamp.quarterOfYear",
            /**
             * Display Form Title: Snapshot - Quarter of Year
             * Display Form ID: dt_snapshotdate_timestamp.quarterOfYear
             */ Default: newAttribute("dt_snapshotdate_timestamp.quarterOfYear"),
        },
        /**
         * Date Attribute: Snapshot - Week/Year
         * Date Attribute ID: dt_snapshotdate_timestamp.week
         */ SnapshotWeekYear: {
            ref: idRef("dt_snapshotdate_timestamp.week", "attribute"),
            identifier: "dt_snapshotdate_timestamp.week",
            /**
             * Display Form Title: Snapshot - Week/Year
             * Display Form ID: dt_snapshotdate_timestamp.week
             */ Default: newAttribute("dt_snapshotdate_timestamp.week"),
        },
        /**
         * Date Attribute: Snapshot - Week of Year
         * Date Attribute ID: dt_snapshotdate_timestamp.weekOfYear
         */ SnapshotWeekOfYear: {
            ref: idRef("dt_snapshotdate_timestamp.weekOfYear", "attribute"),
            identifier: "dt_snapshotdate_timestamp.weekOfYear",
            /**
             * Display Form Title: Snapshot - Week of Year
             * Display Form ID: dt_snapshotdate_timestamp.weekOfYear
             */ Default: newAttribute("dt_snapshotdate_timestamp.weekOfYear"),
        },
        /**
         * Date Attribute: Snapshot - Year
         * Date Attribute ID: dt_snapshotdate_timestamp.year
         */ SnapshotYear: {
            ref: idRef("dt_snapshotdate_timestamp.year", "attribute"),
            identifier: "dt_snapshotdate_timestamp.year",
            /**
             * Display Form Title: Snapshot - Year
             * Display Form ID: dt_snapshotdate_timestamp.year
             */ Default: newAttribute("dt_snapshotdate_timestamp.year"),
        },
    },
    /**
     * Date Data Set Title: Timeline
     * Date Data Set ID: dt_timeline_timestamp
     */ Timeline: {
        ref: idRef("dt_timeline_timestamp", "dataSet"),
        identifier: "dt_timeline_timestamp",
        /**
         * Date Attribute: Timeline - Date
         * Date Attribute ID: dt_timeline_timestamp.day
         */ TimelineDate: {
            ref: idRef("dt_timeline_timestamp.day", "attribute"),
            identifier: "dt_timeline_timestamp.day",
            /**
             * Display Form Title: Timeline - Date
             * Display Form ID: dt_timeline_timestamp.day
             */ Default: newAttribute("dt_timeline_timestamp.day"),
        },
        /**
         * Date Attribute: Timeline - Day of Month
         * Date Attribute ID: dt_timeline_timestamp.dayOfMonth
         */ TimelineDayOfMonth: {
            ref: idRef("dt_timeline_timestamp.dayOfMonth", "attribute"),
            identifier: "dt_timeline_timestamp.dayOfMonth",
            /**
             * Display Form Title: Timeline - Day of Month
             * Display Form ID: dt_timeline_timestamp.dayOfMonth
             */ Default: newAttribute("dt_timeline_timestamp.dayOfMonth"),
        },
        /**
         * Date Attribute: Timeline - Day of Week
         * Date Attribute ID: dt_timeline_timestamp.dayOfWeek
         */ TimelineDayOfWeek: {
            ref: idRef("dt_timeline_timestamp.dayOfWeek", "attribute"),
            identifier: "dt_timeline_timestamp.dayOfWeek",
            /**
             * Display Form Title: Timeline - Day of Week
             * Display Form ID: dt_timeline_timestamp.dayOfWeek
             */ Default: newAttribute("dt_timeline_timestamp.dayOfWeek"),
        },
        /**
         * Date Attribute: Timeline - Day of Year
         * Date Attribute ID: dt_timeline_timestamp.dayOfYear
         */ TimelineDayOfYear: {
            ref: idRef("dt_timeline_timestamp.dayOfYear", "attribute"),
            identifier: "dt_timeline_timestamp.dayOfYear",
            /**
             * Display Form Title: Timeline - Day of Year
             * Display Form ID: dt_timeline_timestamp.dayOfYear
             */ Default: newAttribute("dt_timeline_timestamp.dayOfYear"),
        },
        /**
         * Date Attribute: Timeline - Hour
         * Date Attribute ID: dt_timeline_timestamp.hour
         */ TimelineHour: {
            ref: idRef("dt_timeline_timestamp.hour", "attribute"),
            identifier: "dt_timeline_timestamp.hour",
            /**
             * Display Form Title: Timeline - Hour
             * Display Form ID: dt_timeline_timestamp.hour
             */ Default: newAttribute("dt_timeline_timestamp.hour"),
        },
        /**
         * Date Attribute: Timeline - Hour of Day
         * Date Attribute ID: dt_timeline_timestamp.hourOfDay
         */ TimelineHourOfDay: {
            ref: idRef("dt_timeline_timestamp.hourOfDay", "attribute"),
            identifier: "dt_timeline_timestamp.hourOfDay",
            /**
             * Display Form Title: Timeline - Hour of Day
             * Display Form ID: dt_timeline_timestamp.hourOfDay
             */ Default: newAttribute("dt_timeline_timestamp.hourOfDay"),
        },
        /**
         * Date Attribute: Timeline - Minute
         * Date Attribute ID: dt_timeline_timestamp.minute
         */ TimelineMinute: {
            ref: idRef("dt_timeline_timestamp.minute", "attribute"),
            identifier: "dt_timeline_timestamp.minute",
            /**
             * Display Form Title: Timeline - Minute
             * Display Form ID: dt_timeline_timestamp.minute
             */ Default: newAttribute("dt_timeline_timestamp.minute"),
        },
        /**
         * Date Attribute: Timeline - Minute of Hour
         * Date Attribute ID: dt_timeline_timestamp.minuteOfHour
         */ TimelineMinuteOfHour: {
            ref: idRef("dt_timeline_timestamp.minuteOfHour", "attribute"),
            identifier: "dt_timeline_timestamp.minuteOfHour",
            /**
             * Display Form Title: Timeline - Minute of Hour
             * Display Form ID: dt_timeline_timestamp.minuteOfHour
             */ Default: newAttribute("dt_timeline_timestamp.minuteOfHour"),
        },
        /**
         * Date Attribute: Timeline - Month/Year
         * Date Attribute ID: dt_timeline_timestamp.month
         */ TimelineMonthYear: {
            ref: idRef("dt_timeline_timestamp.month", "attribute"),
            identifier: "dt_timeline_timestamp.month",
            /**
             * Display Form Title: Timeline - Month/Year
             * Display Form ID: dt_timeline_timestamp.month
             */ Default: newAttribute("dt_timeline_timestamp.month"),
        },
        /**
         * Date Attribute: Timeline - Month of Year
         * Date Attribute ID: dt_timeline_timestamp.monthOfYear
         */ TimelineMonthOfYear: {
            ref: idRef("dt_timeline_timestamp.monthOfYear", "attribute"),
            identifier: "dt_timeline_timestamp.monthOfYear",
            /**
             * Display Form Title: Timeline - Month of Year
             * Display Form ID: dt_timeline_timestamp.monthOfYear
             */ Default: newAttribute("dt_timeline_timestamp.monthOfYear"),
        },
        /**
         * Date Attribute: Timeline - Quarter/Year
         * Date Attribute ID: dt_timeline_timestamp.quarter
         */ TimelineQuarterYear: {
            ref: idRef("dt_timeline_timestamp.quarter", "attribute"),
            identifier: "dt_timeline_timestamp.quarter",
            /**
             * Display Form Title: Timeline - Quarter/Year
             * Display Form ID: dt_timeline_timestamp.quarter
             */ Default: newAttribute("dt_timeline_timestamp.quarter"),
        },
        /**
         * Date Attribute: Timeline - Quarter of Year
         * Date Attribute ID: dt_timeline_timestamp.quarterOfYear
         */ TimelineQuarterOfYear: {
            ref: idRef("dt_timeline_timestamp.quarterOfYear", "attribute"),
            identifier: "dt_timeline_timestamp.quarterOfYear",
            /**
             * Display Form Title: Timeline - Quarter of Year
             * Display Form ID: dt_timeline_timestamp.quarterOfYear
             */ Default: newAttribute("dt_timeline_timestamp.quarterOfYear"),
        },
        /**
         * Date Attribute: Timeline - Week/Year
         * Date Attribute ID: dt_timeline_timestamp.week
         */ TimelineWeekYear: {
            ref: idRef("dt_timeline_timestamp.week", "attribute"),
            identifier: "dt_timeline_timestamp.week",
            /**
             * Display Form Title: Timeline - Week/Year
             * Display Form ID: dt_timeline_timestamp.week
             */ Default: newAttribute("dt_timeline_timestamp.week"),
        },
        /**
         * Date Attribute: Timeline - Week of Year
         * Date Attribute ID: dt_timeline_timestamp.weekOfYear
         */ TimelineWeekOfYear: {
            ref: idRef("dt_timeline_timestamp.weekOfYear", "attribute"),
            identifier: "dt_timeline_timestamp.weekOfYear",
            /**
             * Display Form Title: Timeline - Week of Year
             * Display Form ID: dt_timeline_timestamp.weekOfYear
             */ Default: newAttribute("dt_timeline_timestamp.weekOfYear"),
        },
        /**
         * Date Attribute: Timeline - Year
         * Date Attribute ID: dt_timeline_timestamp.year
         */ TimelineYear: {
            ref: idRef("dt_timeline_timestamp.year", "attribute"),
            identifier: "dt_timeline_timestamp.year",
            /**
             * Display Form Title: Timeline - Year
             * Display Form ID: dt_timeline_timestamp.year
             */ Default: newAttribute("dt_timeline_timestamp.year"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: Stacking_1M_1VB_1SB
     * Insight ID: 07039e4f-9166-4d79-a98b-792ac1868925
     */
    Stacking1M1VB1SB: "07039e4f-9166-4d79-a98b-792ac1868925",
    /**
     * Insight Title: calculate derived as default
     * Insight ID: 08f05fc8-32b3-4845-91cc-cfc618348cf3
     */ CalculateDerivedAsDefault: "08f05fc8-32b3-4845-91cc-cfc618348cf3",
    /**
     * Insight Title: Waterfall_Integrated_IsTotal
     * Insight ID: 0ac40607-3df6-4387-96e0-cad37bba7ef1
     */ WaterfallIntegratedIsTotal: "0ac40607-3df6-4387-96e0-cad37bba7ef1",
    /**
     * Insight Title: LX-68
     * Insight ID: 0dd72bbe-f365-42f4-83b0-4cefce034dd0
     */ LX68: "0dd72bbe-f365-42f4-83b0-4cefce034dd0",
    /**
     * Insight Title: LinechartWithContinousLine
     * Insight ID: 116be302-0be2-41fb-a09a-70677bbf19aa
     */ LinechartWithContinousLine: "116be302-0be2-41fb-a09a-70677bbf19aa",
    /**
     * Insight Title: Insight has one measure, one view, one stack
     * Insight ID: 1221a7be-5aa1-44cf-a02b-9eebbc93ad1a
     */ InsightHasOneMeasureOneViewOneStack: "1221a7be-5aa1-44cf-a02b-9eebbc93ad1a",
    /**
     * Insight Title: Table with MVF
     * Insight ID: 1520c614-3826-4d3a-8d69-829e00086dff
     */ TableWithMVF: "1520c614-3826-4d3a-8d69-829e00086dff",
    /**
     * Insight Title: Table using long name metric
     * Insight ID: 1e17f8cf-aa34-4474-8dd5-c1249c688225
     */ TableUsingLongNameMetric: "1e17f8cf-aa34-4474-8dd5-c1249c688225",
    /**
     * Insight Title: Table has two measures
     * Insight ID: 1e584318-ce99-4624-a11e-5444e5a8ae2b
     */ TableHasTwoMeasures: "1e584318-ce99-4624-a11e-5444e5a8ae2b",
    /**
     * Insight Title: Headline has PP
     * Insight ID: 288bdd12-4afc-4829-87ea-67e29976e92f
     */ HeadlineHasPP: "288bdd12-4afc-4829-87ea-67e29976e92f",
    /**
     * Insight Title: Funnel 3 metrics
     * Insight ID: 2a3c5622-3b08-4f18-84e7-0f0778b542ea
     */ Funnel3Metrics: "2a3c5622-3b08-4f18-84e7-0f0778b542ea",
    /**
     * Insight Title: No data
     * Insight ID: 2ba74933-e336-430e-a8d9-25c278bff3ec
     */ NoData: "2ba74933-e336-430e-a8d9-25c278bff3ec",
    /**
     * Insight Title: sparkline table tarp
     * Insight ID: 2bb752c4-ce81-400b-80dc-c31c5882be40
     */ SparklineTableTarp: "2bb752c4-ce81-400b-80dc-c31c5882be40",
    /**
     * Insight Title: Headline with 2 measures
     * Insight ID: 2df0cf28-adb9-40ce-b761-ec5d80e65b17
     */ HeadlineWith2Measures: "2df0cf28-adb9-40ce-b761-ec5d80e65b17",
    /**
     * Insight Title: Stacking_2LM_2RM
     * Insight ID: 31880d8f-f8c5-45d6-9ce4-5688d1d619b5
     */ Stacking2LM2RM: "31880d8f-f8c5-45d6-9ce4-5688d1d619b5",
    /**
     * Insight Title: 1 primary and 2 secondary has null
     * Insight ID: 321e1b2b-d697-4381-a392-9b785efc4a5b
     */ _1PrimaryAnd2SecondaryHasNull: "321e1b2b-d697-4381-a392-9b785efc4a5b",
    /**
     * Insight Title: Table has AM metric
     * Insight ID: 343b329b-e2b0-43b2-9724-de8cd664ebac
     */ TableHasAMMetric: "343b329b-e2b0-43b2-9724-de8cd664ebac",
    /**
     * Insight Title: Insight has no filter
     * Insight ID: 3653281b-4d87-42da-9ccc-d0d002cc1c79
     */ InsightHasNoFilter: "3653281b-4d87-42da-9ccc-d0d002cc1c79",
    /**
     * Insight Title: Arithmetic measure
     * Insight ID: 38371428-afd3-462c-a69d-15bd1de0eaeb
     */ ArithmeticMeasure: "38371428-afd3-462c-a69d-15bd1de0eaeb",
    /**
     * Insight Title: column chart with many data points
     * Insight ID: 3c603791-8f9d-42a6-a5b3-35d631252d3f
     */ ColumnChartWithManyDataPoints: "3c603791-8f9d-42a6-a5b3-35d631252d3f",
    /**
     * Insight Title: Waterfall_Integrated_1Attribute
     * Insight ID: 3c6bf47c-9dc4-4a51-866e-7dcc9604bc01
     */ WaterfallIntegrated1Attribute: "3c6bf47c-9dc4-4a51-866e-7dcc9604bc01",
    /**
     * Insight Title: Insight with tooltip description
     * Insight ID: 3c973d10-1d88-4a9e-b18b-5fcbb51f1503
     */ InsightWithTooltipDescription: "3c973d10-1d88-4a9e-b18b-5fcbb51f1503",
    /**
     * Insight Title: merge cells insight
     * Insight ID: 3ef94acb-1e15-49ef-88d5-e9e2931be959
     */ MergeCellsInsight: "3ef94acb-1e15-49ef-88d5-e9e2931be959",
    /**
     * Insight Title: Outer join test
     * Insight ID: 3f1c474f-4506-4dc5-98ca-e1bdee6ecd59
     */ OuterJoinTest: "3f1c474f-4506-4dc5-98ca-e1bdee6ecd59",
    /**
     * Insight Title: limit 20 measures
     * Insight ID: 427bfd1f-ceed-4fc3-8fc7-dfe19e409e71
     */ Limit20Measures: "427bfd1f-ceed-4fc3-8fc7-dfe19e409e71",
    /**
     * Insight Title: Stacking_2M_1VB
     * Insight ID: 43355ce8-671d-44df-809b-381fac48caa5
     */ Stacking2M1VB: "43355ce8-671d-44df-809b-381fac48caa5",
    /**
     * Insight Title: table with measures rows and column
     * Insight ID: 47209a4f-0c89-4e81-8eb5-6122edcb826b
     */ TableWithMeasuresRowsAndColumn: "47209a4f-0c89-4e81-8eb5-6122edcb826b",
    /**
     * Insight Title: Bar chart sliced by multiple dates
     * Insight ID: 4a428429-d854-4fc9-bfa7-3a4486f772f9
     */ BarChartSlicedByMultipleDates: "4a428429-d854-4fc9-bfa7-3a4486f772f9",
    /**
     * Insight Title: Piechart with 20 metrics
     * Insight ID: 4b4f8c36-e6d6-4b2b-847c-067a0bfc6ea5
     */ PiechartWith20Metrics: "4b4f8c36-e6d6-4b2b-847c-067a0bfc6ea5",
    /**
     * Insight Title: Headline only primary measure
     * Insight ID: 525c725e-54b8-4bf7-995e-b98e9d1d69de
     */ HeadlineOnlyPrimaryMeasure: "525c725e-54b8-4bf7-995e-b98e9d1d69de",
    /**
     * Insight Title: Table with Row Column Total Subtotal
     * Insight ID: 5344eaad-2ab3-4eb0-8d3f-4f9ba42decdd
     */ TableWithRowColumnTotalSubtotal: "5344eaad-2ab3-4eb0-8d3f-4f9ba42decdd",
    /**
     * Insight Title: Complex Table
     * Insight ID: 537b9365-0004-4425-834c-1c18a1ae3e87
     */ ComplexTable: "537b9365-0004-4425-834c-1c18a1ae3e87",
    /**
     * Insight Title: big insight
     * Insight ID: 5517045e-661f-4d6b-b0b0-98030ab9f68c
     */ BigInsight: "5517045e-661f-4d6b-b0b0-98030ab9f68c",
    /**
     * Insight Title: two metrics table
     * Insight ID: 5537383b-67d9-4ea0-b626-2f06cba4f0c7
     */ TwoMetricsTable: "5537383b-67d9-4ea0-b626-2f06cba4f0c7",
    /**
     * Insight Title: Column has configuration
     * Insight ID: 57b434b7-2fe9-4d5b-8b51-28330f9ebd99
     */ ColumnHasConfiguration: "57b434b7-2fe9-4d5b-8b51-28330f9ebd99",
    /**
     * Insight Title: Insight with metric applies local date and attribute filter
     * Insight ID: 594436cf-18e7-465d-b81a-ee52b51a243b
     */ InsightWithMetricAppliesLocalDateAndAttributeFilter: "594436cf-18e7-465d-b81a-ee52b51a243b",
    /**
     * Insight Title: Sankey chart
     * Insight ID: 5af04489-a44f-4922-97d6-e94f9099ddb5
     */ SankeyChart: "5af04489-a44f-4922-97d6-e94f9099ddb5",
    /**
     * Insight Title: ComboWithContinousLine
     * Insight ID: 5dfbdc28-0ce7-47e6-9a2d-ad0ff0b03c5d
     */ ComboWithContinousLine: "5dfbdc28-0ce7-47e6-9a2d-ad0ff0b03c5d",
    /**
     * Insight Title: Table with measures and attributes
     * Insight ID: 631620f8-e18f-4774-b33f-e8615075592c
     */ TableWithMeasuresAndAttributes: "631620f8-e18f-4774-b33f-e8615075592c",
    /**
     * Insight Title: SankeyIntegrate
     * Insight ID: 6bf89bbe-4663-470d-bc3e-029617e8d3f8
     */ SankeyIntegrate: "6bf89bbe-4663-470d-bc3e-029617e8d3f8",
    /**
     * Insight Title: headline check drilling
     * Insight ID: 6cc8fba5-8489-4172-a3ac-b7311d9c4350
     */ HeadlineCheckDrilling: "6cc8fba5-8489-4172-a3ac-b7311d9c4350",
    /**
     * Insight Title: Table has multi metrics and multi formats
     * Insight ID: 6d236ec6-5cf7-493e-8285-6613fde4ce18
     */ TableHasMultiMetricsAndMultiFormats: "6d236ec6-5cf7-493e-8285-6613fde4ce18",
    /**
     * Insight Title: Column chart only measures
     * Insight ID: 6ecba0d9-8fff-4c78-8adf-7f33cc1956c8
     */ ColumnChartOnlyMeasures: "6ecba0d9-8fff-4c78-8adf-7f33cc1956c8",
    /**
     * Insight Title: Stacking_1LM_1RM_2VB
     * Insight ID: 70c35980-7454-485a-877c-dbc4b36277c6
     */ Stacking1LM1RM2VB: "70c35980-7454-485a-877c-dbc4b36277c6",
    /**
     * Insight Title: table with measures and row
     * Insight ID: 7476de6e-428c-41dc-97f5-5b34449b4b51
     */ TableWithMeasuresAndRow: "7476de6e-428c-41dc-97f5-5b34449b4b51",
    /**
     * Insight Title: AreaWithContinousLine
     * Insight ID: 74f7a1dc-d39a-48a2-996d-5b7f602a8adf
     */ AreaWithContinousLine: "74f7a1dc-d39a-48a2-996d-5b7f602a8adf",
    /**
     * Insight Title: calculated default as ratio
     * Insight ID: 75ce0e6b-5779-4b6b-a8b1-5fc78fa6aa58
     */ CalculatedDefaultAsRatio: "75ce0e6b-5779-4b6b-a8b1-5fc78fa6aa58",
    /**
     * Insight Title: table with measures row and column
     * Insight ID: 76cb4f6a-dc03-4aaa-95e7-a3cc0894a879
     */ TableWithMeasuresRowAndColumn: "76cb4f6a-dc03-4aaa-95e7-a3cc0894a879",
    /**
     * Insight Title: 1 primary and 2 secondary
     * Insight ID: 77aafd6d-2f68-4fba-9412-c4737ac83e81
     */ _1PrimaryAnd2Secondary: "77aafd6d-2f68-4fba-9412-c4737ac83e81",
    /**
     * Insight Title: Headline
     * Insight ID: 79d78056-2792-48c8-aa23-c889de4494ee
     */ Headline: "79d78056-2792-48c8-aa23-c889de4494ee",
    /**
     * Insight Title: Stacking_1LM_1RM_1VB
     * Insight ID: 79d8429a-5301-4c52-a46e-578dfbd21678
     */ Stacking1LM1RM1VB: "79d8429a-5301-4c52-a46e-578dfbd21678",
    /**
     * Insight Title: BeginNegativeEndPositive
     * Insight ID: 7c6608b3-7a72-4ba6-87ea-3312a503a2aa
     */ BeginNegativeEndPositive: "7c6608b3-7a72-4ba6-87ea-3312a503a2aa",
    /**
     * Insight Title: Chart full color
     * Insight ID: 7e9a40f1-2071-43ba-afd9-f8cdc4c3df61
     */ ChartFullColor: "7e9a40f1-2071-43ba-afd9-f8cdc4c3df61",
    /**
     * Insight Title: Headline comparison
     * Insight ID: 8092a635-051f-4f0b-90fb-cf439a6f1902
     */ HeadlineComparison: "8092a635-051f-4f0b-90fb-cf439a6f1902",
    /**
     * Insight Title: invalid insight
     * Insight ID: 81452cc9-558b-4b4e-a70b-0a80f3bd2924
     */ InvalidInsight: "81452cc9-558b-4b4e-a70b-0a80f3bd2924",
    /**
     * Insight Title: Insight using long name metric
     * Insight ID: 843701ee-8f24-4942-8522-872a96575f8e
     */ InsightUsingLongNameMetric: "843701ee-8f24-4942-8522-872a96575f8e",
    /**
     * Insight Title: Column chart has not hyperlink
     * Insight ID: 84d13bd9-f976-4e03-8b00-fec9497d580b
     */ ColumnChartHasNotHyperlink: "84d13bd9-f976-4e03-8b00-fec9497d580b",
    /**
     * Insight Title: new save
     * Insight ID: 85756dc3-bea3-447f-8d79-fc42d6bba07c
     */ NewSave: "85756dc3-bea3-447f-8d79-fc42d6bba07c",
    /**
     * Insight Title: Column chart long attribute has hyperlink
     * Insight ID: 87c466b7-e3e0-4a1a-a45a-4ae333bce863
     */ ColumnChartLongAttributeHasHyperlink: "87c466b7-e3e0-4a1a-a45a-4ae333bce863",
    /**
     * Insight Title: calculated as change difference
     * Insight ID: 89d2da82-2bab-44c1-aae7-35cf015a19c6
     */ CalculatedAsChangeDifference: "89d2da82-2bab-44c1-aae7-35cf015a19c6",
    /**
     * Insight Title: ComboAreaWithContinousLine
     * Insight ID: 8b3c4d21-eeda-4a0f-b99d-4c16d4264f20
     */ ComboAreaWithContinousLine: "8b3c4d21-eeda-4a0f-b99d-4c16d4264f20",
    /**
     * Insight Title: Table with total, subtotal
     * Insight ID: 8b9a6962-bd96-4ace-8497-dcdf1457ed99
     */ TableWithTotalSubtotal: "8b9a6962-bd96-4ace-8497-dcdf1457ed99",
    /**
     * Insight Title: Dependency wheel chart
     * Insight ID: 90ffad3a-4ce3-4ecc-a3c2-280a9e4a0ead
     */ DependencyWheelChart: "90ffad3a-4ce3-4ecc-a3c2-280a9e4a0ead",
    /**
     * Insight Title: table with AM
     * Insight ID: 9348b474-5c83-4831-8f85-f699a90af765
     */ TableWithAM: "9348b474-5c83-4831-8f85-f699a90af765",
    /**
     * Insight Title: Combo chart view by Department
     * Insight ID: 97650113-f211-4f0d-a44b-ef01045822af
     */ ComboChartViewByDepartment: "97650113-f211-4f0d-a44b-ef01045822af",
    /**
     * Insight Title: 1 primary and 1 derived
     * Insight ID: 977df551-73fe-4714-9c88-76ebf76da8e4
     */ _1PrimaryAnd1Derived: "977df551-73fe-4714-9c88-76ebf76da8e4",
    /**
     * Insight Title: table has approximate count and data sampling
     * Insight ID: 97bcac85-1d9f-4c38-a353-b6f15512125b
     */ TableHasApproximateCountAndDataSampling: "97bcac85-1d9f-4c38-a353-b6f15512125b",
    /**
     * Insight Title: Column chart has many hyperlinks
     * Insight ID: 9a2ab62b-587a-4b16-9682-1b7962340354
     */ ColumnChartHasManyHyperlinks: "9a2ab62b-587a-4b16-9682-1b7962340354",
    /**
     * Insight Title: Pie has ASC sorting
     * Insight ID: 9abb4bba-b82f-437b-9d3d-cce276470c94
     */ PieHasASCSorting: "9abb4bba-b82f-437b-9d3d-cce276470c94",
    /**
     * Insight Title: column chart with many measures
     * Insight ID: 9eca298a-1404-4ff1-8e0d-ed50e18410d4
     */ ColumnChartWithManyMeasures: "9eca298a-1404-4ff1-8e0d-ed50e18410d4",
    /**
     * Insight Title: Headline with 3 measures
     * Insight ID: a43e9d94-30d0-4645-9132-19b0f79f5183
     */ HeadlineWith3Measures: "a43e9d94-30d0-4645-9132-19b0f79f5183",
    /**
     * Insight Title: Table with SPPY
     * Insight ID: a9f875cf-aef8-477e-a16e-0ed5a0bbac6a
     */ TableWithSPPY: "a9f875cf-aef8-477e-a16e-0ed5a0bbac6a",
    /**
     * Insight Title: test
     * Insight ID: ac241649-cf8e-4ffd-b256-a3a1a2cca6f6
     */ Test: "ac241649-cf8e-4ffd-b256-a3a1a2cca6f6",
    /**
     * Insight Title: 1 primary and 2 secondary 2
     * Insight ID: b0e9645f-e712-4ade-b726-d8c8a76ef1a2
     */ _1PrimaryAnd2Secondary2: "b0e9645f-e712-4ade-b726-d8c8a76ef1a2",
    /**
     * Insight Title: Column chart with Department attribute
     * Insight ID: b1614db1-3058-4071-a2fe-64a017d318c5
     */ ColumnChartWithDepartmentAttribute: "b1614db1-3058-4071-a2fe-64a017d318c5",
    /**
     * Insight Title: AD has null value
     * Insight ID: b3b665b7-bca2-0322-82f1-b86ky73k90f8afe
     */ ADHasNullValue: "b3b665b7-bca2-0322-82f1-b86ky73k90f8afe",
    /**
     * Insight Title: Parent Insight
     * Insight ID: b3b665b7-bca2-4462-82f1-b0e01dff8afe
     */ ParentInsight: "b3b665b7-bca2-4462-82f1-b0e01dff8afe",
    /**
     * Insight Title: Chart sort bucket items modifications
     * Insight ID: b3f34e0c-0237-452a-ade1-9af5de2372d0
     */ ChartSortBucketItemsModifications: "b3f34e0c-0237-452a-ade1-9af5de2372d0",
    /**
     * Insight Title: Transposed table with totals
     * Insight ID: b82fd8ec-786d-462b-8525-207dd72ed6dd
     */ TransposedTableWithTotals: "b82fd8ec-786d-462b-8525-207dd72ed6dd",
    /**
     * Insight Title: Heatmap with 1M1C1R
     * Insight ID: b90c83a3-8b89-4847-ba8c-442661212626
     */ HeatmapWith1M1C1R: "b90c83a3-8b89-4847-ba8c-442661212626",
    /**
     * Insight Title: Combine with all filter types
     * Insight ID: ba13041b-87bc-458c-a514-fcc0074c9973
     */ CombineWithAllFilterTypes: "ba13041b-87bc-458c-a514-fcc0074c9973",
    /**
     * Insight Title: Negative Insight
     * Insight ID: c1f236a4-b48a-4bf6-a94f-a89d5bde2fe9
     */ NegativeInsight: "c1f236a4-b48a-4bf6-a94f-a89d5bde2fe9",
    /**
     * Insight Title: Table with two measures one attribute with metrics in rows
     * Insight ID: c254bedd-4afe-43f5-83f5-2f76fcbfcbdc
     */ TableWithTwoMeasuresOneAttributeWithMetricsInRows: "c254bedd-4afe-43f5-83f5-2f76fcbfcbdc",
    /**
     * Insight Title: Pie has two measures
     * Insight ID: c2955344-c5fd-489d-b0a2-e14af0845049
     */ PieHasTwoMeasures: "c2955344-c5fd-489d-b0a2-e14af0845049",
    /**
     * Insight Title: table with measures row and columns
     * Insight ID: c3613131-4e8c-4b87-9fb1-085c55fc35f7
     */ TableWithMeasuresRowAndColumns: "c3613131-4e8c-4b87-9fb1-085c55fc35f7",
    /**
     * Insight Title: Activity by day of week
     * Insight ID: c95614a0-3b96-4882-8556-bbd00ef42d7e
     */ ActivityByDayOfWeek: "c95614a0-3b96-4882-8556-bbd00ef42d7e",
    /**
     * Insight Title: Stacking_2LM_1RM
     * Insight ID: d1dac0d1-64a7-4bd4-98c7-75a7f6dc0121
     */ Stacking2LM1RM: "d1dac0d1-64a7-4bd4-98c7-75a7f6dc0121",
    /**
     * Insight Title: Insight contains duplicate attributes
     * Insight ID: d626cc1a-b11e-466d-9e28-1aab1e43cd37
     */ InsightContainsDuplicateAttributes: "d626cc1a-b11e-466d-9e28-1aab1e43cd37",
    /**
     * Insight Title: Insight has Table Transpose
     * Insight ID: d7519d99-a49a-4e34-a5c6-2e334d6dd29d
     */ InsightHasTableTranspose: "d7519d99-a49a-4e34-a5c6-2e334d6dd29d",
    /**
     * Insight Title: many data
     * Insight ID: dcce2234-9097-47e7-a165-36cdbaa2e134
     */ ManyData: "dcce2234-9097-47e7-a165-36cdbaa2e134",
    /**
     * Insight Title: Stacking_1LM_2RM_2VB
     * Insight ID: e3808890-dfb9-492e-9bc0-8a1978d9c65e
     */ Stacking1LM2RM2VB: "e3808890-dfb9-492e-9bc0-8a1978d9c65e",
    /**
     * Insight Title: Waterfall_Integrated_MultiMetric
     * Insight ID: e441ea4e-910f-40d9-a0b8-aec94ff427b2
     */ WaterfallIntegratedMultiMetric: "e441ea4e-910f-40d9-a0b8-aec94ff427b2",
    /**
     * Insight Title: WheelIntegrate
     * Insight ID: e557821f-eb65-4997-b9b0-a5a3e2791ae8
     */ WheelIntegrate: "e557821f-eb65-4997-b9b0-a5a3e2791ae8",
    /**
     * Insight Title: Table with measures one attribute with headers on left and metrics in rows
     * Insight ID: e8c055eb-1ded-4e40-811f-cc7774839469
     */ TableWithMeasuresOneAttributeWithHeadersOnLeftAndMetricsInRows:
        "e8c055eb-1ded-4e40-811f-cc7774839469",
    /**
     * Insight Title: Stacking_1LM_2RM
     * Insight ID: ea272286-cc91-426a-ad7e-9557c8464a60
     */ Stacking1LM2RM: "ea272286-cc91-426a-ad7e-9557c8464a60",
    /**
     * Insight Title: 30 filters
     * Insight ID: ea3fb2c0-9002-4b2b-b33f-971a503645c4
     */ _30Filters: "ea3fb2c0-9002-4b2b-b33f-971a503645c4",
    /**
     * Insight Title: Stacking_2M
     * Insight ID: ebf234c8-84dd-4959-8334-705bbe13491e
     */ Stacking2M: "ebf234c8-84dd-4959-8334-705bbe13491e",
    /**
     * Insight Title: Stacking_1LM_2RM_1VB
     * Insight ID: ee2dbebe-81fc-49c4-a492-eb0ebcf7daf0
     */ Stacking1LM2RM1VB: "ee2dbebe-81fc-49c4-a492-eb0ebcf7daf0",
    /**
     * Insight Title: No data
     * Insight ID: f00bd5d5-91da-4139-9e7e-5498d9fe49b5
     */ NoData_1: "f00bd5d5-91da-4139-9e7e-5498d9fe49b5",
    /**
     * Insight Title: Column chart has hyperlink 2
     * Insight ID: f7a50db1-5d2d-4b1a-82e6-e1648836985c
     */ ColumnChartHasHyperlink2: "f7a50db1-5d2d-4b1a-82e6-e1648836985c",
    /**
     * Insight Title: unmerge cells insight
     * Insight ID: fb53ecfb-3874-4bee-8612-afecd3fa3e04
     */ UnmergeCellsInsight: "fb53ecfb-3874-4bee-8612-afecd3fa3e04",
    /**
     * Insight Title: Stacking_2M_2VB
     * Insight ID: f926ecd6-fdc0-4c9e-a83b-aeab963a8e20
     */ Stacking2M2VB: "f926ecd6-fdc0-4c9e-a83b-aeab963a8e20",
    /**
     * Insight Title: Pyramid 3 metrics
     * Insight ID: fa1a1417-9fc0-4e97-b891-791fc37b7927
     */ Pyramid3Metrics: "fa1a1417-9fc0-4e97-b891-791fc37b7927",
    /**
     * Insight Title: Bubble has 3 metrics
     * Insight ID: fae068b0-3c58-458e-a3fe-83d71dbf6d1b
     */ BubbleHas3Metrics: "fae068b0-3c58-458e-a3fe-83d71dbf6d1b",
    /**
     * Insight Title: Insight with compare metric
     * Insight ID: ff8971f0-14e9-4b07-90d5-ad6f4825414b
     */ InsightWithCompareMetric: "ff8971f0-14e9-4b07-90d5-ad6f4825414b",
    /**
     * Insight Title: calculated as difference
     * Insight ID: ff62a4a2-6218-45f2-98cd-a1901b154619
     */ CalculatedAsDifference: "ff62a4a2-6218-45f2-98cd-a1901b154619",
};
export const Dashboards = {
    /**
     * Dashboard Title: Dashboard column chart has not hyperlink
     * Dashboard ID: 0de1f35f-994d-4803-b236-ae2549818104
     */
    DashboardColumnChartHasNotHyperlink: "0de1f35f-994d-4803-b236-ae2549818104",
    /**
     * Dashboard Title: Dashboard column chart has hyperlinks
     * Dashboard ID: 2c269aba-2a5a-4d54-8bdb-bbf037645f0f
     */ DashboardColumnChartHasHyperlinks: "2c269aba-2a5a-4d54-8bdb-bbf037645f0f",
    /**
     * Dashboard Title: LX-68
     * Dashboard ID: 38da56fb-8483-4fa0-82fa-befd309768ae
     */ LX68_1: "38da56fb-8483-4fa0-82fa-befd309768ae",
    /**
     * Dashboard Title: Dashboard with Activity Table 2
     * Dashboard ID: 42a130d7-4c61-42e5-80bb-b3af45969dbc
     */ DashboardWithActivityTable2: "42a130d7-4c61-42e5-80bb-b3af45969dbc",
    /**
     * Dashboard Title: KD has null value
     * Dashboard ID: 5a224af3-902c-4acd-ac75-bfa88d80e044
     */ KDHasNullValue: "5a224af3-902c-4acd-ac75-bfa88d80e044",
    /**
     * Dashboard Title: KD with No data
     * Dashboard ID: 61cbcfcd-efee-407f-ba3a-6c3170f50e03
     */ KDWithNoData: "61cbcfcd-efee-407f-ba3a-6c3170f50e03",
    /**
     * Dashboard Title: Dashboard column chart only measures
     * Dashboard ID: 6dcf6335-92cf-4b77-981f-a1f4d0763053
     */ DashboardColumnChartOnlyMeasures: "6dcf6335-92cf-4b77-981f-a1f4d0763053",
    /**
     * Dashboard Title: KD with big insight
     * Dashboard ID: 75a429f8-6c26-422a-8e0d-9e52981f5403
     */ KDWithBigInsight: "75a429f8-6c26-422a-8e0d-9e52981f5403",
    /**
     * Dashboard Title: KD using long name metric
     * Dashboard ID: 7b2cd4c1-bb41-473a-9017-e404cbc630d2
     */ KDUsingLongNameMetric: "7b2cd4c1-bb41-473a-9017-e404cbc630d2",
    /**
     * Dashboard Title: Dashboard with Activity Table 1
     * Dashboard ID: 8b687694-e2d5-40fd-9631-a074ac5e41a1
     */ DashboardWithActivityTable1: "8b687694-e2d5-40fd-9631-a074ac5e41a1",
    /**
     * Dashboard Title: Target KD has null value
     * Dashboard ID: a87209e0-c53f-4a6f-abf3-17c7d8d4079e
     */ TargetKDHasNullValue: "a87209e0-c53f-4a6f-abf3-17c7d8d4079e",
    /**
     * Dashboard Title: Parent Dashboard
     * Dashboard ID: d1965687-f7bd-41ba-9fa2-f63793d62a62
     */ ParentDashboard: "d1965687-f7bd-41ba-9fa2-f63793d62a62",
    /**
     * Dashboard Title: KD with merge and unmerge insights
     * Dashboard ID: dfb03d5e-ba83-4105-badb-0a02e2e668ee
     */ KDWithMergeAndUnmergeInsights: "dfb03d5e-ba83-4105-badb-0a02e2e668ee",
    /**
     * Dashboard Title: KD with many data insight
     * Dashboard ID: e1e6e5fe-95bc-41b9-bd8c-d9cf5e88a5d0
     */ KDWithManyDataInsight: "e1e6e5fe-95bc-41b9-bd8c-d9cf5e88a5d0",
    /**
     * Dashboard Title: KD with invalid insight
     * Dashboard ID: f50c7076-1d45-4031-a4fd-564459254b12
     */ KDWithInvalidInsight: "f50c7076-1d45-4031-a4fd-564459254b12",
};
