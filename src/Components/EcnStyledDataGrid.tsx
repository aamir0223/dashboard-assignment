import { DataGridPro } from "@mui/x-data-grid-pro";
import { styled } from "@mui/material";

const StyledDataGrid = styled(DataGridPro)(({ theme }) => ({
  fontWeight: "medium",

  ".MuiDataGrid-columnHeaders": {
    backgroundColor: "rgba(33, 33, 33, 0.05)",
    borderRadius: "0px",
    minHeight: "48px !important",
    margin: "22px 0px",
    borderBottom: "none",
    maxHeight: "49px !important",
    marginBottom: "16px",

    ".MuiDataGrid-pinnedColumnHeaders": {
      height: "50px !important",
      marginTop: "2px",
      borderTopLeftRadius: "8px",

      ".MuiDataGrid-columnHeader ": {
        padding: "25px 20px !important"
      }
    }
  },
  ".MuiDataGrid-columnHeader": {
    "&:focus-within": {
      outline: "none"
    }
  },
  ".MuiDataGrid-columnHeaderTitle": {
    fontWeight: "500",
    color: "#000"
  },
  ".MuiDataGrid-toolbarContainer ": {
    marginTop: "-70px",
    marginLeft: "auto",
    zIndex: "1",
    ".MuiButton-root": {
      border: "1px solid #027A48 !important",
      color: "#027A48",
      borderRadius: "7px",
      padding: "8px 24px",
      fontSize: "16px",
      fontWeight: "500",
      marginTop: "-241px !important",
      "&:hover": {
        background: "transparent"
      }
    }
  },
  ".MuiDataGrid-columnSeparator": {
    height: "100%",
    ".MuiSvgIcon-root": {
      color: "transparent",
      width: "10px"
    }
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: "none"
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: "1px solid rgba(0,0,0,0.1)"
  },
  ".MuiDataGrid-virtualScroller": {},
  ".MuiDataGrid-row": {
    background: "#FFFFFF"
  },

  ".MuiDataGrid-cell": {
    minHeight: "64px !important",
    borderBottom: "1px solid rgba(33, 33, 33, 0.20)",
    overflow: "hidden",
    "&:focus-within": {
      outline: "none"
    },
    "&:focus": {
      outline: "none"
    }
  },
  ".MuiDataGrid-cellContent": {
    fontWeight: "400",
    color: "#212121",

    "&:focus-within": {
      outline: "none"
    }
  },
  ".MuiDataGrid-footerContainer": {
    borderTop: "none"
  },
  ".MuiIconButton-root": {
    fontSize: "26px"
  },

  ".MuiDataGrid-columnHeaderDraggableContainer": {
    height: "unset !important"
  },
  ".MuiDataGrid-panel": {
    display: "none"
  },
  ".MuiButtonBase-root ": {
    fontSize: "17px",
    fontWeight: "700",
    color: "black"
  }
}));

const EcnStyledDataGrid = (props: any) => {
  return (
    <StyledDataGrid
      className={
        props.className ? props.className + " ecn-datagrid" : "ecn-datagrid"
      }
      disableRowSelectionOnClick
      checkboxSelection
      rowHeight={50}
      density="comfortable"
      getRowHeight={() => "auto"}
      {...props}
    />
  );
};

export default EcnStyledDataGrid;
