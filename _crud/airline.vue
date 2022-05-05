<template>
</template>
<script>
//Components
export default {
  data() {
    return {
      crudId: this.$uid(),
      appMode : config('app.mode')
    }
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config("main.qfly.entityNames.airline"),
        apiRoute: 'apiRoutes.qfly.airlines',
        //permission: 'ifly.airline',
        //extraFormFields: 'ifly.crud-fields.airline',
        create: {
          title: this.$tr('ifly.cms.form.newAirline')
        },
        read: {
          columns: [
            {
              name: 'id', 
              label: this.$tr('isite.cms.form.id'), 
              field: 'id', 
              style: 'width: 50px'
            },
            {
              name: 'airlineName', 
              label: this.$tr('ifly.cms.form.airlineName'), 
              field: 'airlineName', 
              align: 'left',
            },
            {
              name: 'airlineShortName', 
              label: this.$tr('ifly.cms.form.airlineShortName'), 
              field: 'airlineShortName', 
              align: 'left',
            },
            {
              name: 'airlineIataCode', 
              label: this.$tr('ifly.cms.form.airlineIataCode'), 
              field: 'airlineIATACode', 
              align: 'left',
            },
            {
              name: 'airlineIcaoCode', 
              label: this.$tr('ifly.cms.form.airlineIcaoCode'), 
              field: 'airlineICAOCode', 
              align: 'left',
            },
            {
              name: "created_at",
              label: this.$tr("isite.cms.form.createdAt"),
              field: "createdAt",
              align: "left",
              format: (val) => (val ? this.$trd(val) : "-"),
            },
            {
              name: "updated_at",
              label: this.$tr("isite.cms.form.updatedAt"),
              field: "updatedAt",
              align: "left",
              format: (val) => (val ? this.$trd(val) : "-"),
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          filters: {
            
          },
          requestParams: {
            
          },
        },
        update: {
          title: this.$tr('ifly.cms.form.updateAircraftType')
        },
        delete: true,
        formLeft: {
          id: {value: ""},
          userId: {value: this.$store.state.quserAuth.userId},
          airlineName: {
            value: "",
            type: "input",
            props: {
              label: `${this.$tr('ifly.cms.form.airlineName')}*`,
              rules: [(val) => !!val || this.$tr("isite.cms.message.fieldRequired")],
            },
          },
          airlineShortName: {
            value: "",
            type: "input",
            props: {
              label: `${this.$tr('ifly.cms.form.airlineShortName')}*`,
              rules: [(val) => !!val || this.$tr("isite.cms.message.fieldRequired")],
            },
          },
          airlineIATACode: {
            value: "",
            type: "input",
            props: {
              label: `${this.$tr('ifly.cms.form.airlineIataCode')}*`,
              rules: [(val) => !!val || this.$tr("isite.cms.message.fieldRequired")],
            },
          },
          airlineICAOCode: {
            value: "",
            type: "input",
            props: {
              label: `${this.$tr('ifly.cms.form.airlineIcaoCode')}*`,
              rules: [(val) => !!val || this.$tr("isite.cms.message.fieldRequired")],
            },
          },
        }
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  }
}
</script>
